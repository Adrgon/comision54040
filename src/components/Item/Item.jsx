import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, category, price }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h1>{name}</h1>
      </header>
      <picture>
        <img src={img} style={{ width: 100 }} className="ItemImg" />
      </picture>
      <section>
        <p className="info">Precio: $ {price}</p>
        <p className="info">Category: $ {category}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/detail/${id}`} className="Option">
          Ver Detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
