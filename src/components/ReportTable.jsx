export default function ReportTable({ caption, columns, rows }) {
  return <div className="table-scroll" tabIndex={0} role="region" aria-label={caption || 'Engineering data table'}><table>
    {caption && <caption>{caption}</caption>}
    <thead><tr>{columns.map(column => <th key={column.key} scope="col">{column.label}</th>)}</tr></thead>
    <tbody>{rows.map((row, index) => <tr key={row.id ?? index}>{columns.map(column => <td key={column.key}>{row[column.key]}</td>)}</tr>)}</tbody>
  </table></div>;
}
