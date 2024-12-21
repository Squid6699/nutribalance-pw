export interface ButtonProps {
    text: string | null;
    icon?: any;
    style: "accept" | "normal";
}

export interface InputProps {
    type: "password" | "email" | "text" | "number";
    label: string;
    icon?: any;
    width?: string;
    height?: string;
    defaultValue?: string;
    value?: string;
}

export interface SelectProps {
    text: string | null;
    icon?: any;
    style: "accept" | "normal";
}
