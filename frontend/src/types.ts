export interface ButtonProps {
    type?: "submit" | "button" | "reset";
    text?: string | null;
    icon?: any;
    style: "accept" | "normal";
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    styleButton?: Object;
}

export interface InputProps {
    type?: "password" | "email" | "text" | "number";
    label: string;
    icon?: any;
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
    value?: string | number | boolean;
    onChange?: (value: string) => void;
}

export interface ProfileEditProp {
    data: {
        name: string;
        sex: string;
        email: string;
        age: string;
        weight: string;
        height: string;
        activity: string;
        objective: string;
        allergies: string;
        intolerances: string;
        food_preferences: string;
        imageProfile: string;
    };
}
