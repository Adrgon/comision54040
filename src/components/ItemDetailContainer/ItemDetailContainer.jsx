import './ItemDetailContainer.css'
import { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {
        //console.log(querySnapshot)
        const product = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(product)
      })
      .catch((err)=> {
        console.error(err)
      })
      .finally(()=> {
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
