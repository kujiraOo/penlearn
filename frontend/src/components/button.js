import { button } from './helpers.js';

export default (text, onClick) => {
  const el = button(text);

  el.addEventListener('click', onClick);

  return el;
}
