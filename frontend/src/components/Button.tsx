import "../css/button.css";

import { ButtonProps } from "../types";
import Spinner from "./Spinner";

function Button({ text, icon, style, loading, disabled, onClick, styleButton }: ButtonProps) {
  return (
    <>
      {
        icon ? 
        <button className={style} disabled={loading || disabled} onClick={onClick}>
          <i>{icon}</i> 
          {
            loading ?
              <Spinner />
            : 
            text
          }
        </button>
        :
        <button className={style} disabled={loading || disabled} onClick={onClick} style={styleButton}>
          {
            loading ?
              <Spinner />
            : 
            text
          }
        </button>
      }
      
    </>
  );
}

export default Button;
