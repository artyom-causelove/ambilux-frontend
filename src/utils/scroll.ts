// Прокрутка живёт на #wrapper, а не на окне: у html/body стоит overflow: hidden.
export function scrollToContacts() {
  const wrapper = document.getElementById('wrapper');
  const content = document.getElementById('content');

  if (wrapper && content) {
    wrapper.scrollTo({ top: content.scrollHeight, behavior: 'smooth' });
  }
}

// Для onTransitionReady: ждём конца слайда, потом плавно доскроллим до подвала.
// Длительность берётся из самой анимации, чтобы не дублировать --vt-duration в JS.
export function scrollToContactsAfterTransition() {
  const animation = document.getAnimations().find(
    (item) => (item.effect as KeyframeEffect | null)?.pseudoElement === '::view-transition-new(page)'
  );

  // finished реджектится, если переход прервали новой навигацией
  (animation?.finished ?? Promise.resolve()).then(scrollToContacts).catch(() => {});
}
