"use client";
import React from 'react'
import '../authStyles.css'; // Assuming you have a CSS file for styles
import AuthFooter from '@/components/AuthFooter';
import { useRouter } from 'next/navigation';
import '../authStyles.css'; // Assuming you have a CSS file for styles
import { useLanguage } from '@/context/LanguageContext';
const page = () => {
  const { language, t } = useLanguage();
  const router = useRouter();
  return (
    <div className="auth-container">
      <div className="left-section">
        <a href="#" onClick={() => router.push('/')}>
          <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
        </a>
        <div className="form-box">
          <div className="form-top">
            <h2>{t.forgotPassword}</h2>
            <p>{t.enterYourEmailToReceive}</p>
          </div>

          <div className="form-bottom">
            <label>{t.email} <span className="color-red">*</span></label>
            <input type="email" placeholder={t.email} />
            <button className="submit-btn"><i className="fas fa-check-circle"></i> {t.emailPasswordResetLink}</button>
            <div className="form-footer">{t.returnTo} <a href="#">{t.signIn}</a></div>
          </div>
        </div>

        <AuthFooter />
      </div>

      <div className="right-section right-forgot">

      </div>
    </div>
  )
}

export default page