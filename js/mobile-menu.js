(function(){
  const menu = document.querySelector('.mobile-menu');
  const openBtn = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.mobile-menu__close');
  const links = menu ? menu.querySelectorAll('a[href]') : [];

  function toggleMenu(){
    if(!menu || !openBtn) return;
    const isOpen = menu.classList.toggle('is-open');
    openBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
    menu.setAttribute('aria-hidden', String(!isOpen));
  }

  openBtn && openBtn.addEventListener('click', toggleMenu);
  closeBtn && closeBtn.addEventListener('click', toggleMenu);
  links.forEach(a => a.addEventListener('click', toggleMenu));

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && menu && menu.classList.contains('is-open')) toggleMenu();
  });
})();