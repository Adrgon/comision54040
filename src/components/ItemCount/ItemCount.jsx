import './ItemCount.css'
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
      <div className="Counter">
        <div className="Controls">
          <button className="Button" onClick={decrement}>
            -
          </button>
          <h3 className="Number">{count}</h3>
          <button className="Button" onClick={increment}>
            +
          </button>
        </div>
        <div>
          <button className="Button" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
      </div>
    );
}

export default ItemCount
