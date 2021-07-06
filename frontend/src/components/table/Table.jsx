import React from 'react';
import {
  arrayOf, objectOf, string, number, oneOfType,
} from 'prop-types';

import styles from './Table.module.css';

const Table = ({ data, idProp }) => {
  const columnHeaders = data[0] ? Object.keys(data[0]) : [];

  const headerCells = columnHeaders.map((header) => (
    <th
      key={`header-${header}`}
    >
      {header}
    </th>
  ));

  const rows = data.map((dataRow) => (
    <tr key={`row-${dataRow[idProp]}`}>
      {Object.entries(dataRow).map(([key, value]) => (
        <td key={`cell-${key}`}>
          {value}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headerCells}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: arrayOf(
    objectOf(
      oneOfType([string, number]),
    ),
  ).isRequired,
  idProp: string.isRequired,
};

export default Table;
