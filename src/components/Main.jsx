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
import {ReactComponent as NextButton} from "../images/icon-next.svg"
import {ReactComponent as PreviousButton} from "../images/icon-previous.svg"

import Modal from "./Modal"

import { useState } from "react"


const Main = ({handleCart}) => {
    const [pieces, setPieces] = useState(0);
    const [imageNumber, setImageNumber] = useState(1)
    const [showModal, setShowModal] = useState(false)
    
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

    const handleImageNumber = (num) => {
        setImageNumber(num)
    }

    const nextPhoto = () => {
        if(imageNumber !== 4) setImageNumber(imageNumber+1);
        else setImageNumber(1)
    }

    const previousPhoto = () => {
        if(imageNumber !== 1) setImageNumber(imageNumber-1);
        else setImageNumber(4)
    }
  
    const handleModal = () => {
        setShowModal(!showModal)

    }


    

    return ( 
        <div className="flex flex-col md:flex-row w-screen md:w-4/5 md:h-3/4 justify-center items-center">
        {showModal ? <Modal nextPhoto={nextPhoto} previousPhoto={previousPhoto} handleImageNumber={handleImageNumber} handleModal={handleModal} imageNumber={imageNumber} /> : null}
        <div className="w-screen md:w-1/2 flex flex-col items-center h-4/5 space-y-5">
            <div className="relative w-screen md:w-4/5">
                <button onClick={previousPhoto} className="flex justify-center items-center absolute top-1/2 left-10 md:hidden bg-gray-200 rounded-full py-3 px-4"><PreviousButton /></button>
                <button onClick={nextPhoto} className="flex justify-center items-center absolute top-1/2 right-10 md:hidden bg-gray-200 rounded-full py-3 px-4"><NextButton/></button>
                <img onClick={setShowModal} src={Image1} className={`${imageNumber === 1 ? "block" : "hidden"} cursor-pointer w-screen md:w-4/5 m-auto md:rounded-xl`} alt="First photo" />
                <img onClick={setShowModal} src={Image3} className={`${imageNumber === 2 ? "block" : "hidden"} cursor-pointer w-screen md:w-4/5 m-auto md:rounded-xl`} alt="Third photo" />
                <img onClick={setShowModal} src={Image2} className={`${imageNumber === 3 ? "block" : "hidden"} cursor-pointer w-screen md:w-4/5 m-auto md:rounded-xl`} alt="Second photo" />
                <img onClick={setShowModal} src={Image4} className={`${imageNumber === 4 ? "block" : "hidden"} cursor-pointer w-screen md:w-4/5 m-auto md:rounded-xl`} alt="Fourth photo" />
            </div>
            <div className="hidden w-2/3 md:flex justify-between md:space-x-4">
                <div className= {`${imageNumber === 1 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image1thombnail} onClick={() => setImageNumber(1)} className={`${imageNumber === 1 ? "opacity-30" : ""} cursor-pointer rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 2 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image2thombnail} onClick={() => setImageNumber(2)} className={`${imageNumber === 2 ? "opacity-30" : ""} cursor-pointer rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 3 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image3thombnail} onClick={() => setImageNumber(3)} className={`${imageNumber === 3 ? "opacity-30" : ""} cursor-pointer rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 4 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image4thombnail} onClick={() => setImageNumber(4)} className={`${imageNumber === 4 ? "opacity-30" : ""} cursor-pointer rounded-md w-24 h-24`} alt="" /></div>

            </div>
        </div>
        
        <div className="w-screen md:w-1/2 flex flex-col justify-center items-center">
            <div className="w-4/5 m-auto">
            <h6 className="text-lg pt-2 my-2 text-primary font-bold">Sneaker Company</h6>
            <h2 className="py-2 text-3xl md:text-6xl font-bold">Fall Limited Edition Sneakers</h2>
            <p className="py-4">These low-profile sneakers are your perfect casual wear compasion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="flex justify-between items-center md:block">
                <div className="flex space-x-4 items-center">
                    <h3 className="font-bold text-xl">$125.00</h3>
                    <p className="text-primary bg-secondary px-1 rounded-md font-bold">50%</p>
                </div>
                <p className="text-buttonColor line-through font-bold md:pb-5">$250.00</p>
            </div>
            <div className="flex flex-col items-center md:flex-row w-full space-y-4 my-4 md:space-y-0 md:my-0 justify-between md:space-x-5">
            <div className="flex rounded-xl w-[90%] md:w-1/3 justify-between px-4 py-3 bg-buttonColor">
                <button onClick={decreasePieces} className="px-4"><MinusButton className=""/></button>
                <p>{pieces}</p>
                <button onClick={increasePieces} className="px-4"><PlusButton/></button>
            </div>
            <button onClick={addToCart} className="flex text-white justify-center items-center px-4 py-3 w-[90%] md:w-2/3 bg-primary rounded-xl"><IconCart className="text-white" /> Add to cart</button>

            </div>

        </div>
        </div>


        </div>
     );
}
 
export default Main;