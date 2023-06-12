import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png"

const NavBar = () => {
    
    return (
        <div className="navbar text-white bg-[#9B9898]">
            <div className=" md:container mx-auto px-8">
                
        
        <div className=" navbar-start">

         <Link to="/">  <img src={Logo} alt="" /> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-2xl px-1">
            <li><Link>Home</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Service</Link></li>
          </ul>
        </div>
        </div>
      </div>
    );
};

export default NavBar;