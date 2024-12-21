import "../css/button.css";

import { ButtonProps } from "../types";
import Spinner from "./Spinner";

function Button({ text, icon, style, loading }: ButtonProps) {
  return (
    <>
      {
        icon ? 
        <button className={style} disabled={loading}>
          <i>{icon}</i> 
          {
            loading ?
              <Spinner />
            : 
            text
          }
        </button>
        :
        <button className={style} disabled={loading}>
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
