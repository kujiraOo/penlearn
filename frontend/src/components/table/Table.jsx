import PropTypes from 'prop-types';

const Table = ({ data }) => {
  const columnHeaders = data[0] ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        {columnHeaders.map((header) => <th>{header}</th>)}
      </thead>
      <tbody>
        {data.map((dataRow) => (
          <tr>
            {Object.values(dataRow).map(value => (
              <td>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
