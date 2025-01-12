import Button from "../components/Button";
import img from "../assets/user-default.png";
import { useQuery } from "react-query";
import { useState } from "react";
import "../css/profile.css";
import Backdrop from "../components/Backdrop";
import ProfileSlide from "../components/Profile-Slide";
import ProfileEdit from "./Profile-Edit";

function ProfileData() {

    const HOST = import.meta.env.VITE_HOST;
    const { data: dataUser, isLoading } = useQuery("dataUser", getUser);
    const [errorGetUser, setErrorGetUser] = useState("");
    const [editProfile, setEditProfile] = useState(false);

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
        } catch (error) { }
    }


    return (
        <>
            {isLoading ? <Backdrop /> : (
                <section className="container-profile-app">
                    <div className="container-profile">
                        <>
                            <ProfileSlide />
                            {errorGetUser ? <div className="ProfileError"><h2>{errorGetUser}</h2></div> : (
                                <div className="profile-data-info">
                                    {!editProfile ?
                                        <>
                                            <section className="profile-data">
                                                <div className="profile-image">
                                                    <img src={dataUser?.imageProfile || img} alt="" />
                                                </div>

                                                <div className="profile-user">
                                                    <span className="profile-name">{dataUser?.name}</span>
                                                    <span className="profile-email">{dataUser?.email}</span>
                                                </div>

                                                <div className="profile-button">
                                                    <Button text={"Editar Perfil"} style="accept" onClick={() => setEditProfile(true)} />
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
                                                        <span className="dinamic-text">{dataUser?.weight} Kg</span>
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
                                                        <span className="dinamic-text">{dataUser?.allergies ? dataUser?.allergies : "Sin alergias"}</span>
                                                    </div>

                                                    <div className="profile-info-data-item">
                                                        <span className="static-text">Intolerancias: </span>
                                                        <span className="dinamic-text">{dataUser?.intolerances ? dataUser?.intolerances : "Sin intolerancias"}</span>
                                                    </div>

                                                    <div className="profile-info-data-item">
                                                        <span className="static-text">Preferencias Alimenticias: </span>
                                                        <span className="dinamic-text">{dataUser?.food_preferences ? dataUser?.food_preferences : "Sin preferencias alimenticias"}</span>
                                                    </div>

                                                </div>

                                            </section>
                                        </>
                                        :
                                        editProfile && <ProfileEdit data={dataUser} />
                                    }
                                </div>
                            )}
                        </>
                    </div>
                </section >
            )
            }
        </>
    );
}

export default ProfileData;