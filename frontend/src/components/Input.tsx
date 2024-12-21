import "../css/input.css";
import { InputProps } from "../types";

function Input({type, label, icon, height, width, defaultValue, value }: InputProps) {
  return (
    <div className="input-field">
      {icon && (
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          {icon}
        </span>
      )}
      <input
        spellCheck="false"
        placeholder=""
        type={type}
        defaultValue={defaultValue}
        value={value}
        style={{height: height, width: width, paddingLeft: icon && "30px"}}
      />
      <label>{label}</label>
    </div>
  );
}

export default Input;
