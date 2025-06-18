// context/LanguageContext.js
'use client'

import { createContext, useState, useEffect, useContext } from 'react'
import en from '@/locales/en.json'
import ro from '@/locales/ro.json'

const translations = { en, ro }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en')

    useEffect(() => {
        const savedLang = localStorage.getItem('lang')
        if (savedLang) setLanguage(savedLang)
    }, [])

    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem('lang', lang)
    }

    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
