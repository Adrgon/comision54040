import './ItemListContainer.css'
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../context/Notification";

const ItemListContainer = ({greetings}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  const { setNotification } = useNotification();


  useEffect( ()=> {
    setLoading(true)
    const asynFunctions = categoryId ? getProductsByCategory : getProducts
    asynFunctions(categoryId)
      .then( res => {
        setProducts(res)
      })
      .catch( error => {
        setNotification("danger", `No es posible cargar los productos`);
        console.log(error)
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [categoryId])

  if(loading){
    return <h1>Cargando productos...</h1>
  }

  return (
    <div className='ItemListContainer'>
        <h1>{greetings}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
