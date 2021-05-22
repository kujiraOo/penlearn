export const element = (tag) => (...contents) => {
  const htmlElement = document.createElement(tag);

  contents.forEach((content) => {
    switch (typeof content) {
      case 'string':
      case 'number': {
        htmlElement.innerText = content;
        break;
      }
      case 'function': {
        content(htmlElement);
        break;
      }
      case 'object': {
        if (content instanceof HTMLElement) {
          htmlElement.appendChild(content);
  
          break;
        }
      }
      default: {
        throw new Error(`content valid types: string, number, function, but got ${content}`);
      }
    }
  });

  return htmlElement;
};

export const th = element('th');

export const td = element('td');

export const tr = element('tr');

export const table = element('table');

export const button = element('button');

export const div = element('div');
