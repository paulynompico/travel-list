import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form className="add-form">
      <h3>What do you need to bring on your trip?</h3>
    </form>
  );
}
