export default function List({ items, onDeleteItem, onMarkPacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onMarkPacked={onMarkPacked}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onMarkPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        id={item.description}
        name={item.description}
        onChange={() => onMarkPacked(item.id)}
      />
      <label for={item.description}>
        {item.quantity} {item.description}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
