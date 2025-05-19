import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'pt', 'es', 'fr', 'de', 'it', 'zh', 'ja', 'ko', 'ru', 'hi', 'ar', 'tr'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});