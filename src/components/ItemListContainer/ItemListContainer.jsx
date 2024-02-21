import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList.jsx';

const ItemListConteiner = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
            .then( res => {
                setProducts(res);
            })
    },[])

    console.log(products)
    return (
      <>
        <ItemList products={products}/>
      </>
    );
}

export default ItemListConteiner;
