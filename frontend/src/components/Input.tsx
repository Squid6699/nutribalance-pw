import "../css/input.css";
import { InputProps } from "../types";

function Input({
  type = "text",
  label,
  icon,
  height,
  width,
  value,
  readOnly = false,
  error,
  onChange,
}: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <div className="input-field">
        {icon && <span className="icon">{icon}</span>}
        <input
          spellCheck="false"
          placeholder=""
          type={type}
          value={typeof value === "boolean" ? value.toString() : value}
          onChange={handleInputChange}
          readOnly={readOnly}
          style={{
            height: height,
            width: width,
            paddingLeft: icon ? "30px" : "10px",
          }}
        />
        <label style={{ left: icon && "30px" }}>{label}</label>
      </div>
      {error && <label className="msgError">{error}</label>}
    </>
  );
}

export default Input;
