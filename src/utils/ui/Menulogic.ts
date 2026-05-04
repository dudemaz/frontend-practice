import { domEl } from './domlist.js';

export function addClassOnBurgerMenu() {
  domEl.inputMenu?.addEventListener('click', () => {
    domEl.navSection?.classList.toggle('open-burger');
  });
}
