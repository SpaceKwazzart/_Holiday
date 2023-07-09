import { Email } from '../types';

export const isEmail = (value: string): value is Email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};
