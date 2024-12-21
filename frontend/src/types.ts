export interface ButtonProps {
    text: string | null;
    icon?: any;
    style: "accept" | "normal";
}

export interface InputProps {
    type?: "password" | "email" | "text" | "number";
    label: string;
    icon?: any;
    width?: string;
    height?: string;
    value?: string;
    readOnly?: boolean;
}

export interface SelectProps {
    options: string[];
    label: string;
    icon?: any;
}
