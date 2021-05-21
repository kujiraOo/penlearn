
const element = (tag) => (content) => {
  const htmlElement = document.createElement(tag);

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
    default: {
      throw new Error(`content valid types: string, number, function, but got ${content}`);
    }
  }

  return htmlElement;
};

const th = element('th');

const td = element('td');

const tr = element('tr');

const table = element('table');

const header = (rowData) => tr((el) => {
  Object.keys(rowData).forEach((key) => {
    el.appendChild(th(key));
  })
});

const row = (rowData) => tr((el) => {
  Object.values(rowData).forEach((value) => {
    el.appendChild(td(value));
  })
});

export default (data) => table((el) => {
  el.appendChild(header(data[0]));

  data.forEach((rowData) => {
    el.appendChild(row(rowData));
  });
});
