import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {CartProvider} from './context/CartContext'
import { NotificationProvider } from './context/Notification'
/* import { Memorize } from './components/Memo/Memorize' */


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greetings={"Listado de Productos"} />
                }
              />
              <Route
                path="/category/:categoryId"
                element={
                  <ItemListContainer
                    greetings={"Listado de Productos filtrados"}
                  />
                }
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<h1>Elementos en carrito</h1>} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
      {/*       
      <>
        <Memorize />
      </> 
*/}
    </div>
  );
}

export default App
