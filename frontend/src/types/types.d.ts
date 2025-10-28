import type React from "react";

export type InputProps = {
  label?: string;
  icon?: React.ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = {
    label: string;
}