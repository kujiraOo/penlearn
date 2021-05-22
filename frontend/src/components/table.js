import { table, tr, th, td } from './helpers.js';

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
