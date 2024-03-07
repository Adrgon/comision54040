import {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom'; 


const ItemDetail = ({name, img, category, price, description, stock}) => {
  const [quantity, setQuantity] = useState(0); 

  const handleAdd = (count) => {
    console.log("Agregar al carrito");
    setQuantity(count);
  };
  return (
    <article>
      <h1>{name}</h1>
      <img src={img} style={{ width: 300 }} />
      <p>Categoria: {category}</p>
      <p>Descripcion: {description}</p>
      <h1>{price}</h1>
      <footer>
        {quantity > 0 ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount onAdd={handleAdd} stock={stock} />
        )}
        {/* <ItemCount stock={stock} onAdd={handleAdd} /> */}
      </footer>
    </article>
  );
}

export default ItemDetail
