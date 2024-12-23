import "../css/header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useSesion } from "../hook/useSesion.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
    const { email } = useSesion();
    return(
        <>
            <header className="header-container">
                <Link to={"/"}>
                    <div className="logo-container">
                        <img src={logo} alt="Nutribalance" />
                        <span>Nutribalance</span>
                    </div>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}><span>Recetas</span></Link>
                        </li>
                        <li>
                            <Link to={"/about"}><span>Plan de dieta</span></Link>
                        </li>
                        <li>
                            <Link to={"/contact"}><span>Creador de recetas</span></Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-buttons">
                    {
                        !email ?
                        <Link to={"/auth/login"}>
                            <Button text="Iniciar sesión" style="normal" />
                        </Link>
                        :
                        <Link to={"/profile"}>
                            <Button style="normal" icon={<FontAwesomeIcon icon={faUser} />} />
                        </Link>
                    }
                    
                </div>
            </header>
            <div className="spacer"></div>
        </>
    );
}

export default Header;