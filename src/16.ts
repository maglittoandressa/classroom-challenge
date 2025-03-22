import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={incrementCount}>Increment Counter</button>
      <button onClick={decrementCount}>Decrement Counter</button>
      <p>You have {count} items in the counter.</p>
    </div>
  );
}

export default Counter;
