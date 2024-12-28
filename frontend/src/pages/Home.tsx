import "../css/home.css";
// import { useSesion } from "../hook/useSesion.ts";
import banner from "../assets/banner.jpg";
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

            <section>
                <h1>Porque elegir Nutribalance</h1>
            </section>
        </main>
    );
}

export default Home;