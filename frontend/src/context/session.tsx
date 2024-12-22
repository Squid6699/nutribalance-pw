import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext<SessionContextType | null>(null);

import { ReactNode } from "react";

interface SessionProviderProps {
    children: ReactNode;
}

export interface SessionContextType {
    name: string | null;
    setName: React.Dispatch<React.SetStateAction<string | null>>;
    email: string | null;
    setEmail: React.Dispatch<React.SetStateAction<string | null>>;
    autorization: string | null;
    setAutorization: React.Dispatch<React.SetStateAction<string | null>>;
}

export function SessionProvider({children}: SessionProviderProps) {
    const HOST = import.meta.env.VITE_HOST;
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [autorization, setAutorization] = useState<string | null>(null);

    useEffect(() => {
        const fechtData = async () => {
            try {
                const response = await fetch(HOST + "api/", {
                    method: "POST",
                    headers: {
                        "x-frontend-header": "frontend",
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });

                const data = await response.json();

                if (data.success){
                    setName(data.name);
                    setEmail(data.email);
                    setAutorization(data.autorization);
                }
                
            } catch (error) {}
        }
        fechtData();
    }, []);

    return(
        <SessionContext.Provider value={{
            name,
            setName,
            email,
            setEmail,
            autorization,
            setAutorization
        }}>{children}</SessionContext.Provider>
    )
}