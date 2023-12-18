import "./App.css";
import { useState } from "react";

function App({initial = 0}) {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <div className="App">
      <h1 data-cy="counter">{counter}</h1>
      <button data-cy="increment" onClick={increment}>
        Increment
      </button>
      <button data-cy="decrement" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
