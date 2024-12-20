import "../css/button.css";

import { ButtonProps } from "../types";

function Button({ text, icon, style }: ButtonProps) {
  return (
    <>
      {
        icon ? 
        <button className={style}>
          <i>{icon}</i> {text}
        </button>
        :
        <button className={style}>
          {text}
        </button>
      }
      
    </>
  );
}

export default Button;
