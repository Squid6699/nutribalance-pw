import "../css/input.css";
import { InputProps } from "../types";

function Input({type, placeholder, icon, height, width, defaultValue, value }: InputProps) {
  return (
    <div>
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
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        style={{height: height, width: width, paddingLeft: icon && "30px"}}
      />
    </div>
  );
}

export default Input;
