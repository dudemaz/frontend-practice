import { animate, stagger } from 'animejs';
import { domElOfHeader } from './domlist.js';

export function animateNav() {
  animate(domElOfHeader.navItems, {
    opacity: [0, 1],
    translateY: [20, 0],
    delay: stagger(150),
    duration: 900,
    easing: 'easeOutExpo',
  });
}
