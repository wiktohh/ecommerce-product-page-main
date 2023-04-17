import {ReactComponent as Logo} from "../images/logo.svg"
import {ReactComponent as IconCart} from "../images/icon-cart.svg"
import {ReactComponent as Hamburger} from "../images/icon-menu.svg"
import ProfilePicture from "../images/image-avatar.png"
import Cart from "./Cart"
import { useState, useRef, useEffect } from "react"

const Header = (props) => {

    const [showCart, setShowCart] = useState(false)

    const handleCartButton = () => {
        setShowCart(!showCart)
    }

    return ( 
        <header className="flex items-center justify-around md:justify-between p-10 w-screen md:w-4/5 border-b-4">
            <div className="flex items-center">
            <Hamburger className="block mr-4 md:hidden"/>
            <Logo/>
            <ul className="hidden md:flex md:space-x-5 md:px-10">
                <li className="text-darkBlue">Collections</li>
                <li className="text-darkBlue">Men</li>
                <li className="text-darkBlue">Women</li>
                <li className="text-darkBlue">About</li>
                <li className="text-darkBlue">Contact</li>
            </ul>
            </div>
            <div className="flex items-center space-x-4 md:space-x-10">
                <button onClick={handleCartButton} className="relative w-10 h-10"><IconCart />{props.cart.length === 0 ? null : <div className="flex justify-center items-center absolute right-2 top-0 bg-primary py-2 w-3/5 h-1/3 rounded-xl text-xs text-white">{props.cart.length <= 99 ? props.cart.length : "99+"}</div>}</button>
                <img className="w-12 h-12" src={ProfilePicture} alt="profile picture" />
            </div>
            {showCart ? <Cart handleCartButton={handleCartButton} clearCart={props.clearCart} cart={props.cart}/> : null}
        </header>
     );
}
 
export default Header;