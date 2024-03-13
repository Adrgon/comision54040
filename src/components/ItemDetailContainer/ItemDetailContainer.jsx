import './ItemDetailContainer.css'
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [productId]);

/*   
  if(loading){
    return <h1>Cargando...</h1>
  } */

  return (
    <div className='ItemDetailContainer'>
      {loading ? <h1>Cargando... </h1> : <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
