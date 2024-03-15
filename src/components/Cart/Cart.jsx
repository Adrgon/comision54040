import './Cart.css'
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, getTotal, totalQuantity } = useCart();
    const total = getTotal()


    if(totalQuantity === 0) {
        return <h1>No hay items en el carito</h1>
    }
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <h3>Total {total}</h3>
      <div>
        <button className="Btn" onClick={() => clearCart()}>
          Limpiar Carrito
        </button>
      </div>
      <Link to="/checkout" className="Btn">
        Checkout
      </Link>
    </div>
  );
}

export default Cart
