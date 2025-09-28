(function () {
  const menu = document.querySelector(".mobile-menu");
  const openBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".mobile-menu__close");
  if (!menu || !openBtn) return;

  const links = menu.querySelectorAll("a[href]");

  // если используешь <svg data-icon="open/close"> в кнопке
  const openIco = openBtn.querySelector('[data-icon="open"]');
  const closeIco = openBtn.querySelector('[data-icon="close"]');

  function toggleMenu() {
    const isOpen = menu.classList.toggle("is-open");
    openBtn.setAttribute("aria-expanded", String(isOpen));
    openBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.classList.toggle("no-scroll", isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));

    // переключаем векторные иконки, если они есть
    if (openIco && closeIco) {
      openIco.hidden = isOpen;
      closeIco.hidden = !isOpen;
    }
  }

  openBtn.addEventListener("click", toggleMenu);
  closeBtn && closeBtn.addEventListener("click", toggleMenu);
  links.forEach((a) => a.addEventListener("click", toggleMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) toggleMenu();
  });
})();
