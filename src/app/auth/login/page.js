"use client";
import React from 'react'
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
            <h2>{t.driveWithRomygo}</h2>
            <p>{t.becomeRomygoDrivermakeMoreMoneyToday}</p>
          </div>

          <div className="form-bottom">
            <label>{t.email} <span className="color-red">*</span></label>
            <input type="email" placeholder={t.email} />

            <div className="forgot-password">
              <label>{t.password} <span className="color-red">*</span></label>
              <a onClick={() => router.push('/auth/forgot-password')} href>{t.forgotPassword}</a>
            </div>
            <div className="password-wrapper">
              <input type="password" placeholder={t.password} />
              <div className="password-toggle"><i className="fas fa-eye"></i></div>
            </div>
            <div className="form-check d-flex align-items-center gap-2 mt-3 mb-3">
              <input className="form-check-input custom-check" type="checkbox" id="rememberMe" />
              <label className="form-check-label mb-0" for="rememberMe">
                {t.rememberMe}
              </label>
            </div>

            <button className="submit-btn"><i className="fas fa-check-circle"></i> Sign Up</button>
            <div className="form-footer">{t.dontHaveAnAccount} <a onClick={() => router.push('/auth/sign-up')} >{t.signupHere}</a></div>
          </div>
        </div>
        <AuthFooter />
      </div>

      <div className="right-section right-login">
      </div>
    </div>
  )
}

export default page