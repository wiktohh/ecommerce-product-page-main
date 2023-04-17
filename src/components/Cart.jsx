import Image1 from "../images/image-product-1.jpg"
import {ReactComponent as Delete} from "../images/icon-delete.svg"
import {ReactComponent as Close} from "../images/icon-close.svg"
import { useEffect, useRef } from "react";

const Cart = ({cart, clearCart, handleCartButton}) => {
    const ref = useRef() 

    const closeCart = () => {
      handleCartButton()
    }
 
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            handleCartButton()
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);

    return ( 
        <div ref={ref} className="md:w-1/5 md:h-1/4 absolute w-screen h-screen z-10 top-0 md:top-24 md:right-36 flex flex-col justify-between md:justify-evenly bg-white shadow-2xl">
            <div><Close onClick={closeCart} className="absolute top-7 right-5 md:top-10 md:right-10 text-3xl cursor-pointer hover:fill-red-500"/>
            <h3 className= "px-4 text-3xl py-4 font-medium md:px-7 border-b-2">Cart</h3>
            {cart.length === 0 ? <p className="h-2/3 flex justify-center items-center">Your shopping cart is empty.</p> : (
                <div className="flex items-center justify-center space-x-4 p-4">
                  <img className="w-12 h-12" src={Image1} alt="photos of boots" />
                  <div>
                      <p className="text-md">Fall Limited Edition Sneakers</p>
                      <p>$125.00 x {cart.length} <span className="font-medium">${125.00*cart.length}</span></p>
                  </div>
                  <Delete className="cursor-pointer fill-price hover:fill-red-500 " onClick={clearCart}/>
              </div>
            )}</div>
            {cart.length === 0 ? null : <button className="mx-auto w-4/5 py-2 my-4 rounded-xl text-white font-medium bg-primary flex justify-center items-center">Checkout</button>}
        </div>
     );
}
 
export default Cart;