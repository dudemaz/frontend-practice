import { domElOfHeader } from './domlist.js';

export function addClassOnBurgerMenu() {
  domElOfHeader.inputMenu?.addEventListener('click', () => {
    domElOfHeader.navSection?.classList.toggle('open-burger');
  });
}
