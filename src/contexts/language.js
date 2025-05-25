// context/LanguageContext.js
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const LanguageContext = createContext({
  language: 'sw',
  setLanguage: () => {},
  toggleLanguage: () => {}
})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('sw')

  useEffect(() => {
    // Initialize language from cookie on client side
    const savedLang = Cookies.get('lang') || 'sw'
    setLanguage(savedLang)
  }, [])

  const updateLanguage = (lang) => {
    Cookies.set('lang', lang, { expires: 365, path: '/' })
    setLanguage(lang)
  }

  // Toggle function that switches between 'sw' and 'en'
  const toggleLanguage = () => {
    const newLang = language === 'sw' ? 'en' : 'sw'
    updateLanguage(newLang)
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: updateLanguage,
      toggleLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}