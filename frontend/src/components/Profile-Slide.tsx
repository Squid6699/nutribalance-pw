import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlateWheat } from "@fortawesome/free-solid-svg-icons/faPlateWheat";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function ProfileSlide() {
    const HOST = import.meta.env.VITE_HOST;
    const [logOutLoading, setLogOutLoading] = useState(false);

    const logOut = async () => {
        try {
            setLogOutLoading(true);
            const response = await fetch(HOST + "api/logout", {
                method: "GET",
                headers: {
                    "x-frontend-header": "frontend",
                },
                credentials: "include",
            });

            const data = await response.json();

            if (data.success) {
                setLogOutLoading(false);
                window.location.href = "/";
            }
        } catch (error) { setLogOutLoading(false); }
    }


    return (
        <>
            <div className="container-profile-slide">

                <div className="profile-slide">
                    <Link to={"/profile"}>
                        <div className="profile-item">
                            <span><FontAwesomeIcon icon={faUser} /> Perfil</span>
                        </div>
                    </Link>

                    <Link to={"/profile/recipes-save"}>
                        <div className="profile-item">
                            <span><FontAwesomeIcon icon={faBookOpen} /> Recetas Guardadas</span>
                        </div>
                    </Link>

                    <Link to={"/profile/diet-plan"}>
                        <div className="profile-item">
                            <span><FontAwesomeIcon icon={faPlateWheat} /> Plan de dieta</span>
                        </div>
                    </Link>
                </div>

                <div className="profile-button-outlog">
                    <Button text={"Cerrar Sesión"} style="normal" onClick={logOut} loading={logOutLoading} disabled={logOutLoading} />
                </div>
            </div>
        </>
    );
}

export default ProfileSlide;