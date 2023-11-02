import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleMarkPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onMarkPacked={handleMarkPacked}
      />
      <Footer items={items} />
    </div>
  );
}
