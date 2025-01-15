import "../css/button.css";

import { ButtonProps } from "../types";
import Spinner from "./Spinner";

function Button({type="submit", text, icon, style, loading, disabled, onClick, styleButton }: ButtonProps) {
  return (
    <>
      {
        icon ? 
        <button className={style} disabled={loading || disabled} type={type} onClick={onClick}>
          <i>{icon}</i> 
          {
            loading ?
              <Spinner />
            : 
            text
          }
        </button>
        :
        <button className={style} disabled={loading || disabled} type={type} onClick={onClick} style={styleButton}>
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
