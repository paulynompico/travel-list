import { useState } from "react";
import Header from "./Header";
import Form from "./Footer";
import List from "./List";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="container">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List />
      <Footer />
    </div>
  );
}
