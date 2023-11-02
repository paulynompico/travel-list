import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List items={items} />
      <Footer />
    </div>
  );
}
