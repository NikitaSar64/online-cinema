import { InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl } from "react-hook-form";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    error?: FieldError | FieldErrorsImpl | undefined; 
}
