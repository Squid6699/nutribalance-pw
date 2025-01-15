import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../components/Input";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import { ProfileEditProp } from "../types";
import Select from "../components/Select";
import { faChartLine, faHashtag, faPerson, faScaleBalanced, faTextHeight } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { useSesion } from "../hook/useSesion";

function ProfileEdit({ data }: ProfileEditProp) {
    const HOST = import.meta.env.VITE_HOST;
    const { setName, setEmail } = useSesion();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        name: data.name || "",
        sex: data.sex || "",
        email: data.email || "",
        age: data.age || "",
        weight: data.weight || "",
        height: data.height || "",
        activity: data.activity || "",
        objective: data.objective || "",
        allergies: data.allergies || "",
        intolerances: data.intolerances || "",
        food_preferences: data.food_preferences || "",
        imageProfile: HOST + data?.imageProfile
    });
    const inputRef = useRef(null); // Referencia al input oculto
    const [imgUploaded, setImgUpdloaded] = useState<File>();
    const [imagePreview, setImagePreview] = useState<string>(formValues.imageProfile);

    const [error, setError] = useState({
        name: "",
        email: "",
        img: "",
        uploadProfile: "",
    });

    const abrirInputArchivo = () => {
        if (inputRef.current) {
            inputRef.current.click(); // Activa el input oculto
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormValues((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg")) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            setImgUpdloaded(file);
            return () => URL.revokeObjectURL(imageUrl);

        } else {
            setError((prev) => ({
                ...prev,
                img: "Por favor selecciona un archivo en formato PNG, JPG o JPEG.",
            }));
        }
    };

    const handleSubmitFormEditProfile = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log("aaaaaaa")

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


        try {
            setLoading(true);
            const formData = new FormData();

            if (imgUploaded) {
                formData.append("image", imgUploaded);
            }

            const responseImg = await fetch(HOST + "api/uploadimage", {
                method: "PUT",
                headers: {
                    "x-frontend-header": "frontend",
                },
                body: formData,
                credentials: "include"
            })

            const dataImg = await responseImg.json();

            if (!dataImg) {
                setError((prev) => ({
                    ...prev,
                    uploadProfile: data.msg
                }))
            }

            const response = await fetch(HOST + "api/editprofile", {
                method: "PUT",
                headers: {
                    "x-frontend-header": "frontend",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: formValues.name, sex: formValues.sex, email: formValues.email, age: formValues.age, weight: formValues.weight, height: formValues.height, activity: formValues.activity, objective: formValues.objective, allergies: formValues.allergies, intolerances: formValues.intolerances, food_preferences: formValues.food_preferences, imageProfile: dataImg.filePath }),
                credentials: "include"
            });

            const data = await response.json();

            if (data.success) {
                setLoading(false);
                setName(data.name);
                setEmail(data.email);
                window.location.href = "/profile";
            } else {
                setLoading(false);
                setError((prev) => ({
                    ...prev,
                    uploadProfile: data.msg
                }))
            }


        } catch (e) {
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Edit Profile</h1>
            <form className="form-editProfile" onSubmit={handleSubmitFormEditProfile}>
                <img className="imgEditProfile" src={imagePreview} alt="" onClick={abrirInputArchivo}/>
                <div className="form-group">
                    <input ref={inputRef} hidden type="file" accept=".png, .jpg, .jpeg" onChange={(event) => handleImgChange(event)} />
                </div>
                {error.img && <label className="msgError">{error.img}</label>}

                <div className="form-group">
                    <Input type="text" label="Nombre" icon={<FontAwesomeIcon icon={faUser} />} value={formValues.name} onChange={(value) => handleInputChange("name", value)} error={error.name} />
                </div>
                <div className="form-group">
                    <Input type="text" label="Correo" icon={<FontAwesomeIcon icon={faEnvelope} />} value={formValues.email} onChange={(value) => handleInputChange("email", value)} error={error.email} />
                </div>
                <div className="form-group">
                    <Select label="Sexo" options={[
                        "Hombre",
                        "Mujer"
                    ]} icon={<FontAwesomeIcon icon={faPerson} />} value={formValues.sex} onChange={(value) => handleInputChange("sex", value)} />
                </div>
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
                <div className="form-group">
                    <Button style="accept" text={"Actualizar"} disabled={loading} loading={loading} />
                </div>
                <div className="form-group" onClick={() => window.location.reload()}>
                    <Button style="normal" text={"Cancelar"} type="button" />
                </div>
            </form>

            {error.uploadProfile && <label className="msgError">{error.uploadProfile}</label>}
        </>
    );
}

export default ProfileEdit;