import React from 'react'
import Item from './Item';
import { useState } from 'react';
import "./index.css"

export default function PackingList({items, onDeleteItems, onToggleItems,onClearItems}) {
    const [sortBy, setsortBy] = useState('input');
  
    let sortedItems;
    if(sortBy==='input') sortedItems = items;
  
    if(sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  
    if(sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(b.packed)-Number(a.packed));
  
   
  
    return (
      <div className="List">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
              key={item.id}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={e=>setsortBy(e.target.value)}>
            <option value='input'>Sort By Input Order</option>
            <option value='description'>Sort By description</option>
            <option value='packed'>Sort By Packed Status</option>
          </select>
          <button onClick={onClearItems}>Clear List</button>
        </div>
      </div>
    );
  }