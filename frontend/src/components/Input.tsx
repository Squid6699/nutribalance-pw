import { useState } from "react";
import "../css/input.css";
import { InputProps } from "../types";

function Input({type= "text", label, icon, height, width, value, readOnly = false }: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  }

  return (
    <div className="input-field">
      {icon && (
        <span className="icon">{icon}</span>
      )}
      <input
        spellCheck="false"
        placeholder=""
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        readOnly={readOnly}
        style={
          {
            height: height,
            width: width, 
            paddingLeft: icon ? "30px" : "10px",
          }
        }
      />
      <label style={{left: icon && "30px"}}>{label}</label>
    </div>
  );
}

export default Input;
