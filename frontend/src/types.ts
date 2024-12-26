export interface ButtonProps {
    text?: string | null;
    icon?: any;
    style: "accept" | "normal";
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export interface InputProps {
    type?: "password" | "email" | "text" | "number";
    label: string;
    icon?: any;
    width?: string;
    height?: string;
    value?: string | number | boolean;
    readOnly?: boolean;
    error?: string;
    onChange?: (value: string) => void
}

export interface SelectProps {
    options: string[];
    label: string;
    icon?: any;
    onChange?: (value: string) => void;
}
