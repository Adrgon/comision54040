import { useEffect, useState } from "react";

// const useRef = (initialValue) => useState({current: initialValue})[0]

const ExampleLocalStorage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const lastValue = localStorage.getItem("count");
    if (lastValue) {
      setCount(parseInt(lastValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>count + 1</button>
      <h1>Ejemplo localStorage</h1>
    </>
  );
};

export default ExampleLocalStorage;
