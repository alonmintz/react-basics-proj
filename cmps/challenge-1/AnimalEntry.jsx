export function AnimalEntry({ type, count }) {
  const url = `https://www.google.com/search?q=${type.replace("", "+")}`;
  return (
    <tr>
      <td>{type}</td>
      <td>{count}</td>
      <td>
        <a href={url}>search</a>
      </td>
    </tr>
  );
}
