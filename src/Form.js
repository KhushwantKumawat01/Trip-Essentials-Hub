import React from 'react'
import "./index.css";
import { useState } from 'react';


export default function Form({onAddItems}) {
  const [description, setdescription] = useState(" ");
  const [quantity, setQuantity] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {description, quantity, packed: false, id: Date.now()};

    onAddItems(newItem);
    setdescription("");
    setQuantity("");
  }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>What do you need for your Trip ?? 🤔 </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}