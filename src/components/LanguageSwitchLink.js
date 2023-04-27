import languageDetector from '../utils/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSwitchLink = () => {
  return(<p>uno</p>)
}
const xLanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter()

  let href = rest.href || router.asPath
  let pName = router.pathname
  
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }
  let img = `/images/${locale}.png`
  return(<p>hola</p>)
    
  
/*
  return (
    <Link
      href={href}
    >
      <button style={{ fontSize: 'small' }} onClick={() => languageDetector.cache(locale)}><img width="24" heigth="24" src={img} /> </button>
    </Link>
  );
  */
};

export default LanguageSwitchLink
