import Image1 from "../images/image-product-1.jpg"
import {ReactComponent as Delete} from "../images/icon-delete.svg"

const Cart = ({cart, clearCart}) => {
    return ( 
        <div className="w-1/5 h-1/4 absolute top-24 right-36 flex flex-col justify-evenly bg-white shadow-2xl">
            <h3 className="py-4 px-7 border-b-2">Cart</h3>
            {cart.length === 0 ? <p className="flex justify-center items-center">Brak itemow XD</p> : (
                <div className="flex items-center justify-center space-x-4">
                <img className="w-12 h-12" src={Image1} alt="photos of boots" />
                <div>
                    <p className="text-md">Fall Limited Edition Sneakers</p>
                    <p>$125.00 x {cart.length} ${125.00*cart.length}</p>
                </div>
                <Delete className="cursor-pointer fill-price hover:fill-red-500 " onClick={clearCart}/>
            </div>
            )}
            {cart.length === 0 ? null : <button className="mx-auto w-4/5 py-2 rounded-xl text-white font-medium bg-primary flex justify-center items-center">Checkout</button>}
        </div>
     );
}
 
export default Cart;