import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='ListGroup' onClick={()=> console.log('hice click en itemList')}>
        {
            products.map( prod => {
                return <Item key={prod.id} {...prod} />
            })
        }
    </div>
  )
}

export default ItemList;
