import { useState } from "react";
import Header from "./Header";
// import Form from "./Footer";
// import List from "./List";
import Footer from "./Footer";

const testItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Residence cards", quantity: 2, packed: false },
  { id: 3, description: "Wallets", quantity: 2, packed: false },
  { id: 4, description: "Hedi's pantsu", quantity: 3, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Header />
      {/* <Form onAddItems={handleAddItems} /> */}
      <Form />
      <List />
      <Footer />
    </div>
  );
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need to bring on your trip?</h3>
      <select>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  );
}

function List() {
  return (
    <div className="list">
      <ul>
        {testItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
