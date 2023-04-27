import languageDetector from 'next-language-detector'
import i18n from '@/i18n'
//import i18nextConfig from '../../next-i18next.config'
/*
export default languageDetector({
  supportedLngs: i18n.locales,
  fallbackLng: i18n.defaultLocale
})
*/

export default languageDetector({
  supportedLngs: ['es','en'],
  fallbackLng: 'es'
})