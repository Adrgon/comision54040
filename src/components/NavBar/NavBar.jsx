import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
return (
  <nav style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
    <h1>Ecomerce</h1>
    <section>
      <Link to={"/category/celular"}>Celulares</Link>
      <Link to={"/category/tablet"}>Tablets</Link>
      <Link to={"/category/Computers"}>Computadoras</Link>
    </section>
    <CartWidget />
  </nav>
);
}

export default NavBar
