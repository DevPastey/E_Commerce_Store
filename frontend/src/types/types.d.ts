import type React from "react";
import { LucideIcon } from 'lucide-react';

export type InputProps = {
  step?: string;
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
    role: string;
};

export type LoginProps = {
    email: string;
    password: string;
};

export type categoryProp = {
    name: string;
    imageUrl: string;
    href: string;
    
}


export type AdminTabProps = {
    label: string;
    icon: LucideIcon;
    key: string;
    isActive: boolean;
    onClick: () => void;
}


export interface ProductShape {
    name: string;
    description: string;
    price: number | string ;
    category: string;
    countInStock: number | string;
    imageUrl: string;
    _id: string ;
    isFeatured?: boolean;
}