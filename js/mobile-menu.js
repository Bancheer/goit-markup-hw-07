(function () {
  const menu = document.querySelector(".mobile-menu");
  const openBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".mobile-menu__close");
  if (!openBtn || !menu) return;

  const openIco = openBtn.querySelector('[data-icon="open"]');
  const closeIco = openBtn.querySelector('[data-icon="close"]');

  const setIcons = (isOpen) => {
    if (openIco && closeIco) {
      openIco.hidden = isOpen;
      closeIco.hidden = !isOpen;
    }
    openBtn.setAttribute("aria-expanded", String(isOpen));
    openBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  };

  function toggleMenu() {
    const isOpen = menu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll", isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));
    setIcons(isOpen);
  }

  setIcons(false);
  openBtn.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
  menu
    .querySelectorAll("a[href]")
    .forEach((a) => a.addEventListener("click", toggleMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) toggleMenu();
  });
})();
