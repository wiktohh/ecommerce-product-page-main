import Image1 from "../images/image-product-1.jpg"
import Image2 from "../images/image-product-2.jpg"
import Image3 from "../images/image-product-3.jpg"
import Image4 from "../images/image-product-4.jpg"

import {ReactComponent as IconCart} from "../images/icon-cart.svg"

import image1thombnail from "../images/image-product-1-thumbnail.jpg"
import image2thombnail from "../images/image-product-2-thumbnail.jpg"
import image3thombnail from "../images/image-product-3-thumbnail.jpg"
import image4thombnail from "../images/image-product-4-thumbnail.jpg"

import {ReactComponent as PlusButton} from "../images/icon-plus.svg"
import {ReactComponent as MinusButton} from "../images/icon-minus.svg"
import { useState } from "react"


const Main = ({handleCart}) => {
    const [pieces, setPieces] = useState(0);
    const [imageNumber, setImageNumber] = useState(1)
    
    const increasePieces = () => {
        setPieces(pieces+1);
    }
    const decreasePieces = () => {
        if(pieces === 0 ) return;
        setPieces(pieces-1);
    }

    const addToCart = () => {
        handleCart(pieces, "sneaker")
        setPieces(0)
    }

    const mainImage = `Image${imageNumber}`

    

    return ( 
        <div className="flex w-4/5 justify-center items-center">
        <div className=" w-1/2 flex flex-col items-center h-4/5 space-y-5">
            <div>
            {imageNumber === 1 && <img src={Image1} className="w-3/5 m-auto rounded-xl" alt="First photo" /> }
            {imageNumber === 2 && <img src={Image2} className="w-3/5 m-auto rounded-xl" alt="Second photo" /> }
            {imageNumber === 3 && <img src={Image3} className="w-3/5 m-auto rounded-xl" alt="Third photo" /> }
            {imageNumber === 4 && <img src={Image4} className="w-3/5 m-auto rounded-xl" alt="Fourth photo" /> }
            </div>
            <div className="flex space-x-5">
                <div className= {`${imageNumber === 1 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image1thombnail} onClick={() => setImageNumber(1)} className={`${imageNumber === 1 ? "opacity-30" : ""} rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 2 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image2thombnail} onClick={() => setImageNumber(2)} className={`${imageNumber === 2 ? "opacity-30" : ""} rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 3 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image3thombnail} onClick={() => setImageNumber(3)} className={`${imageNumber === 3 ? "opacity-30" : ""} rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 4 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image4thombnail} onClick={() => setImageNumber(4)} className={`${imageNumber === 4 ? "opacity-30" : ""} rounded-md w-24 h-24`} alt="" /></div>

            </div>
        </div>
        
        <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="w-3/4">
            <h6 className="text-lg text-primary font-bold">Sneaker Company</h6>
            <h2 className="py-4 text-6xl font-bold">Fall Limited Edition Sneakers</h2>
            <p className="py-4">These low-profile sneakers are your perfect casual wear compasion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="flex space-x-4 items-center">
                <h3 className="font-bold text-xl">$125.00</h3>
                <p className="text-primary bg-secondary px-1 rounded-md font-bold">50%</p>
            </div>
            <p className="text-buttonColor line-through font-bold pb-5">$250.00</p>
            <div className="flex w-full justify-between space-x-5">
            <div className="flex rounded-xl w-1/3 justify-between px-4 py-3 bg-buttonColor">
                <button onClick={decreasePieces} className="px-4"><MinusButton className=""/></button>
                <p>{pieces}</p>
                <button onClick={increasePieces} className="px-4"><PlusButton/></button>
            </div>
            <button onClick={addToCart} className="flex text-white justify-center items-center w-2/3 bg-primary rounded-xl"><IconCart className="text-white" /> Add to cart</button>

            </div>

        </div>
        </div>


        </div>
     );
}
 
export default Main;