import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const addItem = (productToAdd) => {
      if (!isInCart(productToAdd.id)) {
        setCart((prev) => [...prev, productToAdd]);
      } else {
        console.error("El producto ya esta en el carrito");
      }
    };

    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id);
    };

    const removeItem = (id) => {
      const cartUpdated = cart.filter((prod) => prod.id !== id);
      setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    }

    const getTotalQuantity = () => {
      let accu = 0;
      cart.forEach(prod => {
        accu += prod.quantity
      })
      return accu
    }

    const getTotal = () => {
      let accu = 0;
      cart.forEach((item)=>{
        accu += item.quantity * item.price;
      })
      return accu
    }

    const totalQuantity = getTotalQuantity()


    return (
      <CartContext.Provider
        value={{
          cart,
          isInCart,
          addItem,
          removeItem,
          clearCart,
          totalQuantity,
          getTotal,
        }}
      >
        {children}
      </CartContext.Provider>
    );
}

export const useCart = () => {
  return useContext(CartContext)
}
