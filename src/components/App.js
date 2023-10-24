import { useState } from "react";
import Header from "./Header";
import Form from "./Footer";
// import List from "./List";
import Footer from "./Footer";

const testItems = [
  { id: 1, description: "Passports", quantity: 2 },
  { id: 2, description: "Residence card", quantity: 2 },
  { id: 3, description: "Wallet", quantity: 2 },
  { id: 4, description: "Hedi's underwear", quantity: 3 },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List />
      <Footer />
    </div>
  );
}

function List() {
  return (
    <div className="list">
      <ul>
        {testItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return <li>{item.description}</li>;
}
