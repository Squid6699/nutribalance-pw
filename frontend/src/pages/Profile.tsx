import { useQuery } from "react-query";
import "../css/profile.css";
import Backdrop from "../components/Backdrop";
import Button from "../components/Button";

import img from "../assets/user-default.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlateWheat } from "@fortawesome/free-solid-svg-icons/faPlateWheat";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { Link } from "react-router-dom";

function Profile() {
    const HOST = import.meta.env.VITE_HOST;
    const { data: dataUser, isLoading } = useQuery("dataUser", getUser);
    const [logOutLoading, setLogOutLoading] = useState(false);
    const [errorGetUser, setErrorGetUser] = useState("");

    async function getUser() {
        try {
            const response = await fetch(HOST + "api/getuser", {
                method: "GET",
                headers: {
                    "x-frontend-header": "frontend",
                },
                credentials: "include",
            });

            const data = await response.json();

            if (data.success) {
                return data.data;
            } else {
                setErrorGetUser(data.msg);
            }
        } catch (error) {

        }
    }

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
            {isLoading ? <Backdrop /> : (
                <section className="container-profile">

                    <div className="container-profile-slide">

                        <div className="profile-slide">
                            <Link to={"/profile/view"}>
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

                    <div className="profile-data-info">
                        <section className="profile-data">
                            <div className="profile-image">
                                <img src={img} alt="" />
                            </div>

                            <div className="profile-user">
                                <span className="profile-name">{dataUser?.name}</span>
                                <span className="profile-email">{dataUser?.email}</span>
                            </div>

                            <div className="profile-button">
                                <Button text={"Editar Perfil"} style="accept" />
                            </div>
                        </section>

                        <section className="profile-info">

                            <h2>Información Personal</h2>

                            <div className="profile-info-data">

                                <div className="profile-info-data-item">
                                    <span className="static-text">Sexo: </span>
                                    <span className="dinamic-text">{dataUser?.sex}</span>
                                </div>

                                <div className="profile-info-data-item">
                                    <span className="static-text">Edad: </span>
                                    <span className="dinamic-text">{dataUser?.age}</span>
                                </div>

                                <div className="profile-info-data-item">
                                    <span className="static-text">Altura: </span>
                                    <span className="dinamic-text">{dataUser?.height}</span>
                                </div>

                                <div className="profile-info-data-item">
                                    <span className="static-text">Peso: </span>
                                    <span className="dinamic-text">{dataUser?.weight}</span>
                                </div>
                            </div>

                            <h2>Actividad</h2>

                            <div className="profile-info-data">

                                <div className="profile-info-data-item">
                                    <span className="static-text">Actividad: </span>
                                    <span className="dinamic-text">{dataUser?.activity}</span>
                                </div>

                                <div className="profile-info-data-item">
                                    <span className="static-text">Objetivo: </span>
                                    <span className="dinamic-text">{dataUser?.objective}</span>
                                </div>

                            </div>

                            <h2>Preferencias</h2>

                            <div className="profile-info-data">

                                <div className="profile-info-data-item">
                                    <span className="static-text">Alergias: </span>
                                    <span className="dinamic-text">{dataUser.allergies ? dataUser.allergies : "Sin alergias"}</span>
                                </div>

                                <div className="profile-info-data-item">
                                    <span className="static-text">Intolerancias: </span>
                                    <span className="dinamic-text">{dataUser.intolerances ? dataUser.intolerances : "Sin intolerancias"}</span>
                                </div>

                                <div className="profile-info-data-item">
                                    <span className="static-text">Preferencias Alimenticias: </span>
                                    <span className="dinamic-text">{dataUser?.food_preferences}</span>
                                </div>

                            </div>

                        </section>
                    </div>
                </section>
            )}

        </>
    );
};

export default Profile;