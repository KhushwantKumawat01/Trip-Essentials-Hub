import React from 'react'
import "./index.css";

export default function Item({item, onDeleteItems, onToggleItems}) {
    return (
      <li className="list">
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItems(item.id)}
        />
        <span style={item.packed ? {textDecoration: "line-through", color:"red"} : {}}>
          {" "}
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>&times;</button>
      </li>
    );
  }
  