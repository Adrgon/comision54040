import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initialValue);

  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{count}</h1>
      <button onClick={decrement}>decrementar</button>
      <button onClick={increment}>incrementar</button>
    </div>
  );
};

export default ItemCount;
