import './ItemList.css'

import {memo, useState} from "react"
import Item from "../Item/Item"


const ItemList = ({products}) => {
  const [algo, setAlgo] = useState(true)
  console.log("reder")
  return (
    <div className="ListGroup">
      {products.map((prod) => {
        return <Item key={prod.id} {...prod} />;
      })}
      <div>
        <button onClick={() => setAlgo(!algo)}>Cambiar algo</button>
      </div>
    </div>
  );
}

export default memo(ItemList)
