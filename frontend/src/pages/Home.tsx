import "../css/home.css";
// import { useSesion } from "../hook/useSesion.ts";
import banner from "../assets/banner.jpg";
import chef from "../assets/chef_recetas.png";
import plan_dieta from "../assets/crear_plan_dieta.jpg";
import receta_inteligente from "../assets/crear_receta_inteligente.jpg";

import Input from "../components/Input";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
    // const { name, email } = useSesion();

    const recetas = ["Avena nocturna", "Tostadas de Aguacate", "Panqueques de avena", "Ensalada de pollo", "Ensalada de atún", "Sopa de verduras", "Tortilla de espinacas y champiñones", "Frutas con yogur griego y granola", "Golden milk", "Pollo a la plancha con vegetales al vapor", "Pescado al horno con verduras", "Hamburguesa de lentejas", "Tacos de lechuga con carne molida", "Sopa de lentejas", "Ensalada de quinoa", "Ensalada de garbanzos", "Ensalada de pasta", "Ensalada de espinacas", "Ensalada de frutas", "Ensalada de pollo", "Ensalada de atún", "Ensalada de salmón", "Ensalada de camarones", "Ensalada de quinoa", "Ensalada de garbanzos", "Ensalada de pasta", "Ensalada de espinacas", "Ensalada de frutas", "Ensalada de pollo", "Ensalada de atún", "Ensalada de salmón", "Ensalada de camarones", "Ensalada de quinoa", "Ensalada de garbanzos", "Ensalada de pasta", "Ensalada de espinacas", "Ensalada de frutas", "Ensalada de pollo", "Ensalada de atún", "Ensalada de salmón", "Ensalada de camarones", "Ensalada de quinoa", "Ensalada de garbanzos", "Ensalada de pasta", "Ensalada de espinacas", "Ensalada de frutas", "Ensalada de pollo", "Ensalada de atún", "Ensalada de salmón", "Ensalada de camarones", "Ensalada de quinoa", "Ensalada de garbanzos", "Ensalada de pasta", "Ensalada de espinacas", "Ensalada de frutas", "Ensalada de pollo", "Ensalada de atún", "Ensalada de salmón", "Ensalada de camarones", "Ensalada de quinoa", "Ensalada de garbanzos", "Ensalada de pasta", "Ensalada de espinacas", "Ensalada de frutas", "Ensalada de pollo", "Ensalada de atún", "Ensalada de salmón", "Ensalada de camarones", "Ensalada de quinoa", "Ensalada de gar"];

    const [labelRecetas, setLabelRecetas] = useState("");
    const [inputValue, setInputValue] = useState("");


    useEffect(() => {
        const indiceAleatorio = Math.floor(Math.random() * recetas.length);
        setLabelRecetas(recetas[indiceAleatorio]);
    }, []);

    const handleInputChange = (value : string) => {
        setInputValue(value);
    }

    return (
        <main className="container-home">
            <div className="container-banner">
                <img src={banner} alt="Porque elegir Nutribalance" />
                <h1 className="title">Encuentra recetas saludables y dietas personalizables</h1>
                <div className="banner-input">
                    <form>
                        <Input label={labelRecetas} icon={<FontAwesomeIcon icon={faMagnifyingGlass} /> } value={inputValue} onChange={(value) => handleInputChange(value)} height="50px" />
                    </form>
                </div>
            </div>

            <section className="container-why">
                <h1 className="title">Porque elegir Nutribalance</h1>
                <span>
                    Nutribalance es una aplicacion de nutricion y recetas que te ayuda a encontrar recetas
                    saludables y dietas personalizadas. Con mas de 100,000 recetas, puedes estar seguro de
                    que encontraras algo que te guste y se ajuste a tus necesidadees nutricionales.
                </span>
            </section>

            <section className="container-features">
                <div className="feature">
                    <div className="feature-image">
                        {/* <img src={chef} alt="Recetas saludables y deliciosas" /> */}
                    </div>
                    <span className="feature-title">
                        Recetas saludables y deliciosas
                    </span>
                    <span className="feature-body">
                        Descubre mas de 100,000 recetas saludables y deliciosas. Encuentra el tipo de receta que necesitas
                        en funcion de tus objetivos nutricionales.
                    </span>
                </div>

                <div className="feature">
                    <div className="feature-image">
                        {/* <img src={plan_dieta} alt="Crear tu plan de dieta personalizada" /> */}
                    </div>
                    <span className="feature-title">
                        Crea tu plan de dieta personalizada
                    </span>
                    <span className="feature-body">
                        Obten recomendaciones de comidas diarias personalizadas en funcion de tus objetivos
                        nutricionales y preferencias personales.
                    </span>
                </div>

                <div className="feature">
                    <div className="feature-image">
                        {/* <img src={receta_inteligente} alt="Creador de recetas inteligentes" /> */}
                    </div>
                    <span className="feature-title">
                        Creador de recetas inteligentes
                    </span>
                    <span className="feature-body">
                        Ingresa los ingredientes que tienes en casa y te diremos que recetas puedes hacer
                        con ellos.
                    </span>
                </div>
            </section>
        </main>
    );
}

export default Home;