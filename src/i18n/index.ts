import en from './en';
import es from './es';

const translations = { en, es };

export const languages = {
  en: 'English',
  es: 'Español',
};

export type Languages = keyof typeof languages;

export const useTranslation = (locale: Languages) => translations[locale];
