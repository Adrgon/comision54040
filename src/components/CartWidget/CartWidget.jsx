import './CartWidget.css'
import cart from "../../assets/cart.svg";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  return (
    <Link to="/cart" className="CartWidget">
      <img
        src={cart}
        style={{ width: 25 }}
        alt="cart-widget"
        className='CartImg'
      />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
