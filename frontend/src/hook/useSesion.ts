import { useContext } from "react";
import { SessionContext, SessionContextType } from "../context/session";

export function useSesion(): SessionContextType {
    const context = useContext(SessionContext) as SessionContextType;

    if (context === undefined) {
        throw new Error("useContext debe ser usado en un SesionContextProvider");
    }

    return context;
}