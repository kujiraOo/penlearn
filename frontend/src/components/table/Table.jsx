import PropTypes from 'prop-types';

import styles from './Table.module.css'

const Table = ({ data }) => {
  const columnHeaders = data[0] ? Object.keys(data[0]) : [];

  const headerCells = columnHeaders.map((header, i) => (
    <th key={`header-${i}`}>
      {header}
    </th>
  ));


  const rows = data.map((dataRow, i) => (
    <tr key={`row-${i}`}>
      {Object.values(dataRow).map((value, j) => (
        <td key={`cell-${j}`}>
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
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
