import { useState } from "react";
import "../css/Select.css";
import { SelectProps } from "../types";

function Select({ options, label, icon }: SelectProps) {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isListVisible, setIsListVisible] = useState(false);

  // Manejar cambios en el campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // Seleccionar una opción
  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setIsListVisible(false);
  };

  const handleBlur = () => {
    setTimeout(() => setIsListVisible(false), 200); // Retraso para permitir selección
  };

  return (
    <>
      <div className="autocomplete-container">
        <div className="floating-label">
          {icon && (
            <span className="icon">{icon}</span>
          )}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsListVisible(true)}
            onBlur={handleBlur}
            className="autocomplete-input"
            placeholder=""
            style={{
              paddingLeft: icon ? "30px" : "10px",
            }}
          />
          <label style={{left: icon && "30px"}}>{label}</label>
        </div>
        {isListVisible && (
          <ul className="options-list">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="option-item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Select;
