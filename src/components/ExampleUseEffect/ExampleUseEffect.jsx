import { useEffect, useState, useRef } from "react";

// const useRef = (initialValue) => useState({current: initialValue})[0]

const ExampleUseEffect = () => {
  const [count, setCount] = useState(0);

  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = `count: ${count}`;

    return () => {
      document.title = titleRef.current;
    };
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>count + 1</button>
      <h1>Esto es un ejemplo de useEffect</h1>
    </>
  );
};

export default ExampleUseEffect;
