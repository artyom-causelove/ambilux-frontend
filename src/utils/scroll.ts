// Прокрутка живёт на #wrapper, а не на окне: у html/body стоит overflow: hidden.
// #wrapper уже учитывает высоту фиксированной шапки через padding-top, поэтому
// обычного scrollIntoView достаточно — без ручного подсчёта оффсетов.
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Для onTransitionReady: ждём конца слайда, потом плавно доскроллим до секции.
// Длительность берётся из самой анимации, чтобы не дублировать --vt-duration в JS.
export function scrollToSectionAfterTransition(id: string) {
  const animation = document.getAnimations().find(
    (item) => (item.effect as KeyframeEffect | null)?.pseudoElement === '::view-transition-new(page)'
  );

  // finished реджектится, если переход прервали новой навигацией
  (animation?.finished ?? Promise.resolve()).then(() => scrollToSection(id)).catch(() => {});
}
