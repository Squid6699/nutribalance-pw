import { useState } from "react";
import "../css/header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useSesion } from "../hook/useSesion.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
    const { email } = useSesion();
    const [offCanvas, setOffCanvas] = useState(false);

    return(
        <>
            <header className="header-container">
                <Link to={"/"} onClick={() => setOffCanvas(false)}>
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
                <div className={`menu-icon ${offCanvas ? "change" : ""}`} onClick={() => setOffCanvas(!offCanvas)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </header>

            {/* OFFCANVAS */}
            <div className={`offcanvas ${offCanvas ? "offcanvas-visible" : ""}`}>
                <ul>
                    <li><Link to={"/auth/login"} onClick={() => setOffCanvas(false)}>Iniciar Sesion</Link></li>
                    <li><Link to={"/auth/register"} onClick={() => setOffCanvas(false)}>Registrarse</Link></li>
                    <hr />
                    <li><Link to={"/"} onClick={() => setOffCanvas(false)}>Recetas</Link></li>
                    <li><Link to={"/about"} onClick={() => setOffCanvas(false)}>Plan de dieta</Link></li>
                    <li><Link to={"/contact"} onClick={() => setOffCanvas(false)}>Creador de recetas</Link></li>
                </ul>
            </div>

            <div className="spacer"></div>
        </>
    );
}

export default Header;