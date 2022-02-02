const elSiteHeader = document.querySelector('.site-header');
const elSiteHeaderToggler = document.querySelector('.site-header__toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', () => {
    elSiteHeader.classList.toggle('site-header--open');
  });
}