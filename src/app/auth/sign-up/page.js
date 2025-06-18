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
                <a href onClick={() => router.push('/')}>
                    <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
                </a>

                <div className="form-box">
                    <div className="form-top">
                        <h2>{t.driveWithRomygo}</h2>
                        <p>{t.becomeRomygoDrivermakeMoreMoneyToday}</p>
                    </div>

                    <div className="form-bottom">

                        <label>{t.role} <span className="color-red">*</span></label>
                        <div className="role-buttons">
                            <button type="button" className="role-btn active" data-role="Gym">
                                <i className="fas fa-check-circle"></i> {t.driver}
                            </button>

                        </div>

                        <label>{t.name} <span className="color-red">*</span></label>
                        <input type="text" placeholder={t.name} />

                        <label>{t.email} <span className="color-red">*</span></label>
                        <input type="email" placeholder={t.email} />

                        <label>{t.password} <span className="color-red">*</span></label>
                        <div className="password-wrapper">
                            <input type="password" placeholder={t.password} />
                            <div className="password-toggle"><i className="fas fa-eye"></i></div>
                        </div>
                        <ul className="password-rules">
                            <li>{t.atleasteightCharacter}</li>
                            <li>{t.atLeastOneUppercase}</li>
                            <li>{t.atLeastOneLowerCas}</li>
                            <li>{t.atLeastoneNumber}</li>
                            <li>{t.atLeastOneSpecialCharacter}</li>
                        </ul>

                        <label>{t.confirmPassword} <span className="color-red">*</span></label>
                        <div className="password-wrapper">
                            <input type="password" placeholder={t.confirmPassword} />
                            <div className="password-toggle"><i className="fas fa-eye"></i></div>
                        </div>

                        <div className="form-footer">
                            {t.byClickingSignUp} <a href="#">{t.termsOfUse}</a> {t.and} <a href="#">{t.privacyPolicy}</a>
                        </div>
                        <button className="submit-btn"><i className="fas fa-check-circle"></i> {t.signUp}</button>
                        <div className="form-footer"> {t.alreadyHaveAn} <a onClick={() => router.push('/auth/login')} >{t.signInHere}</a></div>
                    </div>
                </div>
                <AuthFooter />
            </div>
            <div className="right-section"> </div>
        </div>
    )
}

export default page