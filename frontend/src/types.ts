export interface ButtonProps {
    text: string | null;
    icon?: any;
    style: "accept" | "normal";
    loading?: boolean;
}

export interface InputProps {
    type?: "password" | "email" | "text" | "number";
    label: string;
    icon?: any;
    width?: string;
    height?: string;
    value?: string;
    readOnly?: boolean;
    error?: string;
    onChange?: (value: string) => void
}

export interface SelectProps {
    options: string[];
    label: string;
    icon?: any;
}
