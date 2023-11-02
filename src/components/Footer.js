export default function Footer({ items }) {
  function handlePacked(items) {
    return items.filter((item) => item.packed).length;
  }
  return (
    <footer className="stats">
      <em>
        You have {items.length} {items.length === 1 ? "item" : "items"} on your
        list and you have packed{" "}
        {Math.round(100 * (handlePacked(items) / items.length)) || 0}%
      </em>
    </footer>
  );
}
