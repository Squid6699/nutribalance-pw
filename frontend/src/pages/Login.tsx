import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Input from "../components/Input"
import "../css/login.css"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Login(){

    useEffect(() => {
        document.title = "Nutribalance - Login";
    }, []);
    
    const HOST = import.meta.env.VITE_HOST;
    const [loading, setLoading] = useState(false);
    const [errorLogin, setErrorLogin] = useState("");

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormValues((prev) => ({
          ...prev,
          [field]: value,
        }));
    };

    useEffect(() => {
        if (formValues.email !== "") {
            setErrors((prev) => ({
                ...prev,
                email: "",
            }));
        }

        if (formValues.password !== "") {
            setErrors((prev) => ({
                ...prev,
                password: "",
            }));
        }
    }, [formValues]);

    const handleSubmitLogin = async (e : React.FormEvent) => {
        e.preventDefault();

        if (formValues.email === ""){
            setErrors((prev) => ({
                ...prev,
                email: "El campo correo es requerido",
            }));
            return;
        }

        if (formValues.password === ""){
            setErrors((prev) => ({
                ...prev,
                password: "El campo contraseña es requerido",
            }));
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(HOST + "api/auth/login", {
                method: "POST",
                headers: {
                    "x-frontend-header": "frontend",
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({email: formValues.email, password: formValues.password}),
            });

            const data = await response.json();

            if (data.success){
                window.location.href = "/";
            }else{
                setLoading(false);
                setErrorLogin(data.msg);
            }
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="login-layout">
                <div className="login-container">
                    <h1>Ingresar</h1>
                    <form className="login-content" onSubmit={handleSubmitLogin}>
                        <div className="form-group">
                            <Input type="email" label="Correo" icon={<FontAwesomeIcon icon={faEnvelope} />} value={formValues.email} error={errors.email} onChange={(value) => handleInputChange("email", value)} />
                        </div>
                        <div className="form-group">
                            <Input type="password" label="Contraseña" icon={<FontAwesomeIcon icon={faLock} />} value={formValues.password} error={errors.password} onChange={(value) => handleInputChange("password", value)} />
                        </div>
                        <div className="form-group">
                            <Button style="accept" text={"Ingresar"} loading={loading} />
                        </div>
                    </form>
                    <div className="login-footer">
                        <div>
                            <span className="msgError">{errorLogin}</span>
                        </div>
                        <div>
                            <a href="#">Olvidaste tu contraseña?</a>
                        </div>
                        <hr />
                        <div>
                            <Link to={"/auth/register"}><Button style="accept" text={"Crear cuenta"} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Login