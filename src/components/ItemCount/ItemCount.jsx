import { useState } from "react"

const ItemCount = ({initial=1, stock}) => {
  
    const [count, setCount] = useState(initial)
  
    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
          if (count > 1) {
            setCount(prev => prev - 1);
          }
        };

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    );
}

export default ItemCount
