import Header from "./components/Header"
import Main from "./components/Main"
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [cart, setCart] = useState(loadCarts())


  function loadCarts(){
    const cartJSON = localStorage.getItem('cart');
    if(cartJSON == null) return []
    return JSON.parse(cartJSON)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  const clearCart = () => {
    setCart([])
  }

  const handleCart = (attemps, name) => {
    const tmp = cart;
    for(let i=0; i<attemps; i++){
      tmp.push(name)
    }
    setCart([...tmp])
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col items-center">
      <Header clearCart={clearCart} cart={cart}/>
      <Main handleCart={handleCart}/>
    </div>
  );
}

export default App;
