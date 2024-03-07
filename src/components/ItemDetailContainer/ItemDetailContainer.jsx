import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams()

    useEffect(() => {
      getProductById(productId)
        .then((res) => {
          setProduct(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [productId]);
  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
