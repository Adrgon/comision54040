import "./CartWidget.css";
import logo from "../../assets/react.svg";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  return (
    <Link to="/cart" className="CartWidget">
      <img
        src={logo}
        style={{ width: 25 }}
        alt="cart-widget"
        className="CartImg"
      />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
