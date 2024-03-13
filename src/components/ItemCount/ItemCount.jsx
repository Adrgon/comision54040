import { useState } from "react"

const ItemCount = ({initial=1, stock, onAdd}) => {  
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
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    );
}

export default ItemCount
