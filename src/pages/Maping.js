// App.jsx
import React, { useState } from "react";

const Mapping = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Morning standup call", completed: false },
    { id: 2, name: "AfterNoon standup call", completed: false },
    { id: 3, name: "Evening standup call", completed: false },
  ]);

  const toggleCompletion = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleCompletion(item.id)}
            className={item.completed ? "completed" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mapping;
