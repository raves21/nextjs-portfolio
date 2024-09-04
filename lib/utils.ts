import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const goToSection = (elementId: string) => {
  const element = document.querySelector(`#${elementId}`);
  element?.scrollIntoView();
};