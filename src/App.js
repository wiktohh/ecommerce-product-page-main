import Header from "./components/Header"
import Main from "./components/Main"
import './App.css';
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([])

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
    <div className="w-screen h-screen flex flex-col items-center">
      <Header clearCart={clearCart} cart={cart}/>
      <Main handleCart={handleCart}/>
    </div>
  );
}

export default App;
