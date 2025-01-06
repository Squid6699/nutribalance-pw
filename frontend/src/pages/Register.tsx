import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import Input from "../components/Input";
import "../css/register.css";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { useEffect, useState } from "react";
import { faBowlFood, faBrain, faChartLine, faHashtag, faPerson, faScaleBalanced, faShrimp, faTextHeight } from "@fortawesome/free-solid-svg-icons";
import Select from "../components/Select";
import { AnimatePresence, motion } from "framer-motion";
import Stepper from "../components/Stepper";

function Register() {

    useEffect(() => {
        document.title = "Nutribalance - Register";
    }, []);

    const HOST = import.meta.env.VITE_HOST;

    const stepVariants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    const [formValues, setFormValues] = useState({
        name: "",
        sex: "",
        email: "",
        password: "",
        age: "",
        weight: "",
        height: "",
        activity: "",
        objective: "",
        allergies: "",
        intolerances: "",
        food_preferences: ""
    });

    const [loading, setLoading] = useState(false);
    const [errorRegister, setErrorRegister] = useState("");

    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (formValues.name !== "") {
            setError((prev) => ({
                ...prev,
                name: "",
            }));
        }

        if (formValues.email !== "") {
            setError((prev) => ({
                ...prev,
                email: "",
            }));
        }

        if (formValues.password !== "") {
            setError((prev) => ({
                ...prev,
                password: "",
            }));
        }
    },[formValues]);

    const handleInputChange = (field: string, value: string) => {
        setFormValues((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const [step, setStep] = useState(0);

    const handleNextStep = () => {
        setStep(step + 1);
    }

    const handlePrevStep = () => {
        setStep(step - 1);
    }

    const handleSubmitRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formValues.name === "") {
            setError((prev) => ({
                ...prev,
                name: "El nombre es obligatorio",
            }));
            return;
        }

        if (formValues.email === "") {
            setError((prev) => ({
                ...prev,
                email: "El correo es obligatorio",
            }));
            return;
        }

        if (formValues.password === "") {
            setError((prev) => ({
                ...prev,
                password: "La contraseña es obligatoria",
            }));
            return;
        }

        // Send data to backend
        try {
            setLoading(true);
            const response = await fetch(`${HOST}api/auth/register`, {
                method: "POST",
                headers: {
                    "x-frontend-header": "frontend",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: formValues.name, sex: formValues.sex ,email: formValues.email, password: formValues.password, age: formValues.age, weight: formValues.weight, height: formValues.height, activity: formValues.activity, objective: formValues.objective, allergies: formValues.allergies, intolerances: formValues.intolerances, food_preferences: formValues.food_preferences}),
                credentials: "include",
            });

            const data = await response.json();

            if (data.success){
                window.location.href = "/";
            }else{
                setLoading(false);
                setErrorRegister(data.msg);
            }
        } catch (error) {
            setLoading(false);
        }

    }

    return (
        <>
            <div className="register-layout">
                <div className="register-container">
                    <h1>Registarse</h1>
                    <Stepper step={step} />
                    <form className="register-content" onSubmit={handleSubmitRegister}>
                        <AnimatePresence mode="wait">
                            {
                                step === 0 && (
                                    <>
                                        <motion.div
                                            className="register-content"
                                            key="step1"
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            variants={stepVariants}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="form-group">
                                                <Input type="text" label="Nombre" icon={<FontAwesomeIcon icon={faUser} />} value={formValues.name} onChange={(value) => handleInputChange("name", value)} error={error.name} />
                                            </div>
                                            <div className="form-group">
                                                <Select label="Sexo" options={[
                                                    "Hombre",
                                                    "Mujer"
                                                ]} icon={<FontAwesomeIcon icon={faPerson} />} value={formValues.sex} onChange={(value) => handleInputChange("sex", value)} />
                                            </div>
                                            <div className="form-group">
                                                <Input type="text" label="Correo" icon={<FontAwesomeIcon icon={faEnvelope} />} value={formValues.email} onChange={(value) => handleInputChange("email", value)} error={error.email}/>
                                            </div>
                                            <div className="form-group">
                                                <Input type="password" label="Contraseña" icon={<FontAwesomeIcon icon={faLock} />} value={formValues.password} onChange={(value) => handleInputChange("password", value)}  error={error.password} />
                                            </div>

                                            <div className="wizard-button">
                                                <Button style="normal" text="Siguiente" onClick={handleNextStep} />
                                            </div>
                                        </motion.div>
                                    </>
                                )
                            }

                            {
                                step === 1 && (
                                    <>
                                        <motion.div
                                            className="register-content"
                                            key="step2"
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            variants={stepVariants}
                                            transition={{ duration: 0.3 }}
                                        >
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
                                                ]} icon={<FontAwesomeIcon icon={faChartLine} />} value={formValues.activity} onChange={(value) => handleInputChange("activity", value)} />
                                            </div>

                                            <div className="wizard-buttons">
                                                <Button style="normal" text="Anterior" onClick={handlePrevStep} />
                                                <Button style="normal" text="Siguiente" onClick={handleNextStep} />
                                            </div>
                                        </motion.div>
                                    </>
                                )
                            }

                            {
                                step === 2 && (
                                    <>
                                        <motion.div
                                            className="register-content"
                                            key="step3"
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            variants={stepVariants}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="form-group">
                                                <Select label="Objetivo" options={[
                                                    "Perder peso",
                                                    "Mantener peso",
                                                    "Ganar peso",
                                                    "Mejorar salud"
                                                ]} icon={<FontAwesomeIcon icon={faChartLine} />} value={formValues.objective} onChange={(value) => handleInputChange("objective", value)} />
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
                                                ]} icon={<FontAwesomeIcon icon={faBowlFood} />} value={formValues.food_preferences} onChange={(value) => handleInputChange("food_preferences", value)} />
                                            </div>

                                            <div className="wizard-button">
                                                <Button style="normal" text="Anterior" onClick={handlePrevStep} />
                                            </div>

                                            <div className="form-group">
                                                <Button style="accept" text={"Crear cuenta"} disabled={error.name !== "" || error.email !== "" || error.password !== ""} loading={loading} />
                                            </div>
                                            <div className="register-footer">
                                                <div>
                                                    <span className="msgError">{errorRegister}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </>
                                )
                            }
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;