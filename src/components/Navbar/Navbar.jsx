import { useEffect, useState } from "react";

import "./Navbar.css";
import logo from "../../assets/logo-site.png";
import { Link } from "react-router-dom";
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
          <Link to={'/'}>
            <li className={"item " + (toggle ? "active" : "")}><a>Home</a></li>
          </Link>

          <Link to={'/about'}>
            <li className={"item " + (toggle ? "active" : "")}><a>About</a></li>
          </Link>

          <Link to={'/news'}>
            <li className={"item " + (toggle ? "active" : "")}><a>News</a></li>
          </Link>

          <Link to={'/products'}>
            <li className={"item " + (toggle ? "active" : "")}><a>Products</a></li>
          </Link>

          <Link to={'/contact-us'}>
            <li className={"item " + (toggle ? "active" : "")}><a>Contact Us</a></li>
          </Link>
          </>
        )
      } else {
        return(
          <div className="nav-items">

            <Link to={'/'}>
              <li className={"item " + (toggle ? "active" : "")}><a>Home</a></li>
            </Link>

            <Link to={'/about'}>
              <li className={"item " + (toggle ? "active" : "")}><a>About</a></li>
            </Link>

            <Link to={'/news'}>
              <li className={"item " + (toggle ? "active" : "")}><a>News</a></li>
            </Link>

            <Link to={'/products'}>
              <li className={"item " + (toggle ? "active" : "")}><a>Products</a></li>
            </Link>

            <Link to={'/contact-us'}>
              <li className={"item " + (toggle ? "active" : "")}><a>Contact Us</a></li>
            </Link>



          </div>
        )
      }
    }

    return (        
    <nav>
        <ul className="menu">
            <Link to={'/'}>
              <img className="img-logo" src={logo}></img>
            </Link>

            {renderNavItems()}

            <FontAwesomeIcon className="toggle-icon" icon={toggle ? faX : faBars} onClick={() => {isToggled(!toggle)}}/>
        </ul>
    </nav>
    )

}

export default Navbar