import {ReactComponent as Close} from "../images/icon-close.svg"

import Image1 from "../images/image-product-1.jpg"
import Image2 from "../images/image-product-2.jpg"
import Image3 from "../images/image-product-3.jpg"
import Image4 from "../images/image-product-4.jpg"

import image1thombnail from "../images/image-product-1-thumbnail.jpg"
import image2thombnail from "../images/image-product-2-thumbnail.jpg"
import image3thombnail from "../images/image-product-3-thumbnail.jpg"
import image4thombnail from "../images/image-product-4-thumbnail.jpg"

import {ReactComponent as NextButton} from "../images/icon-next.svg"
import {ReactComponent as PreviousButton} from "../images/icon-previous.svg"


const Modal = ({handleModal, imageNumber, handleImageNumber, nextPhoto, previousPhoto}) => {

    const closeModal = () => {
        handleModal()
    }

    const changePhoto = (num) => {
        handleImageNumber(num)
    }
    const nextImage = () => {
        nextPhoto()
    }

    const previousImage = () => {
        previousPhoto()
    }

    return ( 
        <div className="w-screen h-screen fixed z-10 top-0 left-0 right-0 bottom-0 bg-[rgba(49,49,49,0.95)]">
            <Close onClick={closeModal} className="absolute top-7 right-5 md:top-10 md:right-10 text-3xl cursor-pointer fill-white hover:fill-red-500"/>
            <div className="w-screen h-screen flex flex-col items-center justify-center space-y-3">
            <div className="relative w-2/5">
                <button onClick={previousImage} className="flex justify-center items-center z-100 absolute top-1/2 left-12 bg-gray-200 rounded-full py-3 px-4"><PreviousButton /></button>
                <button onClick={nextImage} className="flex justify-center items-center z-100 absolute top-1/2 right-12  bg-gray-200 rounded-full py-3 px-4"><NextButton/></button>
                <img src={Image1} className={`${imageNumber === 1 ? "block" : "hidden"} w-screen md:w-4/5 m-auto md:rounded-xl`} alt="First photo" />
                <img src={Image3} className={`${imageNumber === 2 ? "block" : "hidden"} w-screen md:w-4/5 m-auto md:rounded-xl`} alt="Third photo" />
                <img src={Image2} className={`${imageNumber === 3 ? "block" : "hidden"} w-screen md:w-4/5 m-auto md:rounded-xl`} alt="Second photo" />
                <img src={Image4} className={`${imageNumber === 4 ? "block" : "hidden"} w-screen md:w-4/5 m-auto md:rounded-xl`} alt="Fourth photo" />
            </div>
            <div className="hidden w-2/6 md:flex justify-between md:space-x-4">
                <div className= {`${imageNumber === 1 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image1thombnail} onClick={() => changePhoto(1)} className={`${imageNumber === 1 ? "opacity-30" : ""} cursor-pointer rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 2 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image2thombnail} onClick={() => changePhoto(2)} className={`${imageNumber === 2 ? "opacity-30" : ""} cursor-pointer rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 3 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image3thombnail} onClick={() => changePhoto(3)} className={`${imageNumber === 3 ? "opacity-30" : ""} cursor-pointer rounded-md w-24 h-24`} alt="" /></div>
                <div className= {`${imageNumber === 4 ? "border-4 rounded-xl w-24 h-24 border-primary overflow-hidden" : "" }`}><img src={image4thombnail} onClick={() => changePhoto(4)} className={`${imageNumber === 4 ? "opacity-30" : ""} cursor-pointer rounded-md w-24 h-24`} alt="" /></div>

            </div>
        </div>
        </div>
     );
}
 
export default Modal;