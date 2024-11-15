function List({ items }) {
    console.log(items);
    
  return (
    <ul>
      {items.map(item => (
        <li key={item.field}>{item.value}</li>
      ))}
    </ul>
  );
}

export default List;