import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form className="add-form">
      <h3>What do you need to bring on your trip?</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  );
}
