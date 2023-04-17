import {ReactComponent as Close} from "../images/icon-close.svg"

const HamburgerMenu = ({handleHamburgerButton}) => {

    const closeMenu = () => {
        handleHamburgerButton()
    }

    return ( 
        <div className="absolute top-0 left-0 z-10 flex h-screen w-screen">
            <ul className="w-3/4 h-screen flex flex-col p-4 bg-white">   
                <Close onClick={closeMenu} className="cursor-pointer mb-8"/>
                <li className="text-darkBlue py-2 font-medium text-xl">Collections</li>
                <li className="text-darkBlue py-2 font-medium text-xl">Men</li>
                <li className="text-darkBlue py-2 font-medium text-xl">Women</li>
                <li className="text-darkBlue py-2 font-medium text-xl">About</li>
                <li className="text-darkBlue py-2 font-medium text-xl">Contact</li>
            </ul>
            <div className="h-screen w-1/4 bg-black opacity-70"></div>
        </div>
     );
}
 
export default HamburgerMenu;