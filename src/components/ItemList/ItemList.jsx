import './ItemList.css'

import {memo} from "react"
import Item from "../Item/Item"


const ItemList = ({products}) => {
  return (
    <div className='ListGroup'>
        {
            products.map( prod => {
                return <Item key={prod.id} {...prod} />
            })
        }
    </div>
  )
}

export default memo(ItemList)
