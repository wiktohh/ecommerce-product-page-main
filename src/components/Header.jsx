import {ReactComponent as Logo} from "../images/logo.svg"
import {ReactComponent as IconCart} from "../images/icon-cart.svg"
import ProfilePicture from "../images/image-avatar.png"

const Header = () => {
    return ( 
        <header className="flex items-center justify-between p-10 w-4/5 border-b-4">
            <div className="flex items-center">
            <Logo/>
            <ul className="flex space-x-5 px-10">
                <li className="text-darkBlue">Collections</li>
                <li className="text-darkBlue">Men</li>
                <li className="text-darkBlue">Women</li>
                <li className="text-darkBlue">About</li>
                <li className="text-darkBlue">Contact</li>
            </ul>
            </div>
            <div className="flex items-center space-x-10">
                <button><IconCart/></button>
                <img className="w-12 h-12" src={ProfilePicture} alt="profile picture" />
            </div>
            
        </header>
     );
}
 
export default Header;