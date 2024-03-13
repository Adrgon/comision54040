import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
return (
  <nav className="NavBar">
    <Link to={"/"}> Ecomerce </Link>
    <section className="Categories">
      <Link
        to={"/category/celular"}
      >
        Celulares
      </Link>
      <Link
        to={"/category/tablet"}
      >
        Tablets
      </Link>
      <Link
        to={"/category/computers"}
      >
        Computadoras
      </Link>
    </section>
    <CartWidget />
  </nav>
);
}

export default NavBar
