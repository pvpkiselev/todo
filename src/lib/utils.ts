import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateText = (text: string) => {
  const trimmedText = text.trim();

  if (trimmedText === '') {
    return { isValid: false, message: 'Please enter a valid text' };
  }

  const invalidCharacters = /[^a-zA-Zа-яА-ЯёЁ0-9\s]/;
  if (invalidCharacters.test(trimmedText)) {
    return { isValid: false, message: 'Please use only letters and numbers' };
  }

  const maxLength = 100;
  if (trimmedText.length > maxLength) {
    return { isValid: false, message: `Text should not exceed ${maxLength} characters` };
  }

  return { isValid: true, message: '' };
};
