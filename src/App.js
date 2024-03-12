import logo from "./logo.svg";
import "./index.css";
import Stats from "./Stats";
import Item from "./Item";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";
import React, {useState} from "react";

const initialItems = [
  {id: 1, description: "Passports ", quantity: 2, packed: false},
  {id: 2, description: "Socks", quantity: 12, packed: false},
  {id: 3, description: "Charger", quantity: 12, packed: false},
];

function App() {
  const [items, setItems] = useState([]);

  function HandleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function HandleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function HandleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? {...item, packed: !item.packed} : item
      )
    );
  }

  function HandleClearList(){
    const confirmed = window.confirm('Are You Sure ! You Want To Delete All Items');
    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={HandleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={HandleDeleteItems}
        onToggleItems={HandleToggle}
        onClearItems={HandleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
