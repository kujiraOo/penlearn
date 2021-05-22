import { div } from './helpers.js';

export default (content) => {
  const el = div(content);

  el.classList.add('flex-container');
  
  return el;
};
