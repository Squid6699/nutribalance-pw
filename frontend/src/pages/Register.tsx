import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import Input from "../components/Input";
import "../css/register.css";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { useEffect, useState } from "react";
import { faBowlFood, faBrain, faChartLine, faHashtag, faScaleBalanced, faShrimp, faTextHeight } from "@fortawesome/free-solid-svg-icons";
import Select from "../components/Select";

function Register(){

    useEffect(() => {
        document.title = "Nutribalance - Register";
    }, []);

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        weight: "",
        height: "",
        activity: "",
        objetive: "",
        allergies: "",
        intolerances: "",
        food_preferences: ""
    });

    const handleInputChange = (field: string, value: string) => {
        setFormValues((prev) => ({
          ...prev,
          [field]: value,
        }));
    };

    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    }

    const handlePrevStep = () => {
        setStep(step - 1);
    }

    const handleSubmitRegister = async (e : React.FormEvent) => {
        e.preventDefault();

        
    }

    return (
        <>
            <div className="register-layout">
                <div className="register-container">
                    <h1>Registarse</h1>
                    <form className="register-content" onSubmit={handleSubmitRegister}>

                        {
                            step === 1 && (
                                <>
                                    <div className="form-group">
                                        <Input type="text" label="Nombre" icon={<FontAwesomeIcon icon={faUser}  />} value={formValues.name} onChange={(value) => handleInputChange("name", value)} />
                                    </div>
                                    <div className="form-group">
                                        <Input type="text" label="Correo" icon={<FontAwesomeIcon icon={faEnvelope} />} value={formValues.email} onChange={(value) => handleInputChange("email", value)} />
                                    </div>
                                    <div className="form-group">
                                        <Input type="password" label="Contraseña" icon={<FontAwesomeIcon icon={faLock} />} value={formValues.password} onChange={(value) => handleInputChange("password", value)} />
                                    </div>
                                </>
                            )
                        }

                        {
                            step === 2 && (
                                <>
                                    <div className="form-group">
                                        <Input type="number" label="Edad" icon={<FontAwesomeIcon icon={faHashtag} />} value={formValues.age} onChange={(value) => handleInputChange("age", value)} />
                                    </div>
                                    <div className="form-group">
                                        <Input type="number" label="Peso" icon={<FontAwesomeIcon icon={faScaleBalanced} />} value={formValues.weight} onChange={(value) => handleInputChange("weight", value)} />
                                    </div>
                                    <div className="form-group">
                                        <Input type="number" label="Altura" icon={<FontAwesomeIcon icon={faTextHeight} />} value={formValues.height} onChange={(value) => handleInputChange("height", value)} />
                                    </div>
                                    <div className="form-group">
                                        <Select label="Actividad" options={[
                                            "Sedentarismo",
                                            "Moderado",
                                            "Activo",
                                            "Muy activo"
                                        ]} icon={<FontAwesomeIcon icon={faChartLine} />} onChange={(value) => handleInputChange("activity", value)} />
                                    </div>
                                </>
                            )
                        }

                        {
                            step === 3 && (
                                <>
                                    <div className="form-group">
                                        <Select label="Objetivo" options={[
                                            "Perder peso",
                                            "Mantener peso",
                                            "Ganar peso",
                                            "Mejorar salud"
                                        ]} icon={<FontAwesomeIcon icon={faChartLine} />} onChange={(value) => handleInputChange("objetive", value)} />
                                    </div>
                                    <div className="form-group">
                                        <Input type="text" label="Alergias" icon={<FontAwesomeIcon icon={faShrimp} />} value={formValues.allergies} onChange={(value) => handleInputChange("allergies", value)} />
                                    </div>
                                    <div className="form-group">
                                        <Input type="text" label="Intolerancias" icon={<FontAwesomeIcon icon={faBrain} />} value={formValues.intolerances} onChange={(value) => handleInputChange("intolerances", value)} />
                                    </div>
                                    <div className="form-group">
                                        <Select label="Preferencias Alimenticias" options={[
                                            "Vegetariano",
                                            "Vegano",
                                            "Carnívoro",
                                            "Keto",
                                            "Paleo",
                                            "Sin gluten",
                                            "Sin lactosa",
                                            "Sin azúcar"
                                        ]} icon={<FontAwesomeIcon icon={faBowlFood} />} onChange={(value) => handleInputChange("food_preferences", value)} />
                                    </div>
                                </>
                            )
                        }
                        


                        {/* <div className="form-group">
                            <Button style="accept" text={"Crear cuenta"} />
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;