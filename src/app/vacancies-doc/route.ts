// Опубликованный Google Doc с вакансиями, очищенный до голой разметки.
// В iframe документ свёрстан как бумажная страница с полями 72pt — на телефоне текст
// сжимался в узкую колонку, а стилизовать чужой iframe нельзя. Поэтому забираем HTML
// на сервере, выкидываем стили Google и отдаём фрагмент, который блок вакансий рисует сам.
// Лежит не под /api: этот префикс nginx отдаёт бэкенду.

const VACANCIES_DOC_URL =
  'https://docs.google.com/document/d/e/2PACX-1vTPvdaCEgL7vFvr8IjgQrFDJId4HXANaR6jo52ej8XPafR1Z06mnCpGXLDTzppi4ltZqvscL9KHkrbk/pub?embedded=true';

// Правки документа подтягиваются не позже чем через 5 минут.
export const revalidate = 300;

const ALLOWED = new Set(['p', 'br', 'ol', 'ul', 'li', 'a', 'strong', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

// Google ведёт внешние ссылки через редирект google.com/url?q=...
const unwrapLink = (href: string) => {
  try {
    const url = new URL(href.replace(/&amp;/g, '&'));
    if (url.hostname.endsWith('google.com') && url.pathname === '/url') return url.searchParams.get('q') ?? '';
    return url.href;
  } catch {
    return '';
  }
};

const escapeAttr = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function clean(html: string) {
  // Жирное и курсив в Google Docs задаются классами вида .c3{font-weight:700} — переводим в теги.
  const css = (html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) ?? []).join('');
  const classesWith = (rule: RegExp) => new Set(
    [...css.matchAll(/\.(c\d+)\{([^}]*)\}/g)].filter(([, , body]) => rule.test(body)).map(([, name]) => name)
  );
  const bold = classesWith(/font-weight:\s*(700|bold)/);
  const italic = classesWith(/font-style:\s*italic/);

  const start = html.indexOf('doc-content');
  let body = start >= 0 ? html.slice(html.indexOf('>', start) + 1) : html;
  body = body.replace(/<\/body>[\s\S]*$/, '')
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, '');

  // Span со «жирным» классом → <strong>, остальные span просто разворачиваем.
  const spans: string[] = [];
  body = body.replace(/<span([^>]*)>|<\/span>/gi, (tag, attrs?: string) => {
    if (tag.startsWith('</')) return spans.pop() ?? '';
    const classes: string[] = (attrs ?? '').match(/class="([^"]*)"/)?.[1].split(/\s+/) ?? [];
    const open = [classes.some(c => bold.has(c)) && 'strong', classes.some(c => italic.has(c)) && 'em'].filter(Boolean);
    spans.push(open.reverse().map(t => `</${t}>`).join(''));
    return open.map(t => `<${t}>`).join('');
  });

  // Пункты в документе кончаются пустыми переносами — вместе с отступом li это двойной зазор.
  body = body.replace(/(\s*<br>)+\s*<\/li>/gi, '</li>');

  // Каждый пункт списка — вакансия, первая строка в нём — название позиции: выделяем.
  body = body.replace(/<li([^>]*)>([^<]+)<br>/gi, '<li$1><strong>$2</strong><br>');

  // В документе почта — просто синий текст, а не ссылка: делаем кликабельной сами.
  // Соседних ссылок нет, поэтому вложенных <a> не получится.
  body = body.replace(/(^|[\s>(«])([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g, '$1<a href="mailto:$2">$2</a>');

  // Белый список тегов без атрибутов; у ссылок — только проверенный href.
  return body.replace(/<(\/?)([a-z0-9]+)([^>]*)>/gi, (_, slash: string, name: string, attrs: string) => {
    const tag = name.toLowerCase();
    if (!ALLOWED.has(tag)) return '';
    if (tag === 'a' && !slash) {
      const href = unwrapLink(attrs.match(/href="([^"]*)"/)?.[1] ?? '');
      return /^(https?:|mailto:)/.test(href) ? `<a href="${escapeAttr(href)}" target="_blank" rel="noopener">` : '<a>';
    }
    // Google рвёт нумерованный список на несколько <ol start="N"> — без start нумерация начнётся заново.
    if (tag === 'ol' && !slash) {
      const start = attrs.match(/start="(\d+)"/)?.[1];
      return start ? `<ol start="${start}">` : '<ol>';
    }
    return `<${slash}${tag}>`;
  }).trim();
}

export async function GET() {
  try {
    const response = await fetch(VACANCIES_DOC_URL, { next: { revalidate } });
    if (!response.ok) throw new Error(String(response.status));

    return new Response(clean(await response.text()), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  } catch {
    // Пустой ответ с ошибкой — блок вакансий тогда покажет исходный iframe.
    return new Response('', { status: 502 });
  }
}
