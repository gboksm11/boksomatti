import { useEffect, useState } from "react";

import "./Navbar.css";
import logo from "../../assets/logo-site.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {

    const [toggle, isToggled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    useEffect(() => {
      const reactToWindowResize = () => {
        setIsMobile(window.innerWidth <= 850);
      }
      window.addEventListener('resize', reactToWindowResize);
    });

    const renderNavItems = () => {
      if (isMobile) {
        return (
          <>
          <li className={"item " + (toggle ? "active" : "")}><a href="#">Home</a></li>
          <li className={"item " + (toggle ? "active" : "")}><a href="#">About</a></li>
          <li className={"item " + (toggle ? "active" : "")}><a href="#">News</a></li>
          <li className={"item " + (toggle ? "active" : "")}><a href="#">Products</a></li>
          <li className={"item " + (toggle ? "active" : "")}><a href="#">Contact Us</a></li>
          </>
        )
      } else {
        return(
          <div className="nav-items">
            <li className={"item " + (toggle ? "active" : "")}><a href="#">Home</a></li>
            <li className={"item " + (toggle ? "active" : "")}><a href="#">About</a></li>
            <li className={"item " + (toggle ? "active" : "")}><a href="#">News</a></li>
            <li className={"item " + (toggle ? "active" : "")}><a href="#">Products</a></li>
            <li className={"item " + (toggle ? "active" : "")}><a href="#">Contact Us</a></li>
          </div>
        )
      }
    }


    console.log(toggle);
    return (        
    <nav>
        <ul className="menu">
            <img className="img-logo" src={logo}></img>
            {renderNavItems()}
            {/* <li className={"item " + (toggle ? "active" : "")}><a href="#">Home</a></li>
            <li className={"item " + (toggle ? "active" : "")}><a href="#">About</a></li>
            <li className={"item " + (toggle ? "active" : "")}><a href="#">Contact Us</a></li> */}

            <FontAwesomeIcon className="toggle-icon" icon={toggle ? faX : faBars} onClick={() => {isToggled(!toggle)}}/>
        </ul>
    </nav>
    )

}

export default Navbar