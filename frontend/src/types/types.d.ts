import type React from "react";

export type InputProps = {
  label?: string;
  icon?: React.ReactElement;
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

} & React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = {
    disabled: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


export type FormShape = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type LoginProps = {
    email: string;
    password: string;
};
