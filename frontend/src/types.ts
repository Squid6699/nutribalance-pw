export interface ButtonProps {
    text: string | null;
    icon?: any;
    style: "accept" | "normal";
}

export interface InputProps {
    type: "password" | "email" | "text" | "number";
    placeholder: string;
    icon?: any;
    width?: string;
    height?: string;
    defaultValue?: string;
    value?: string;
}