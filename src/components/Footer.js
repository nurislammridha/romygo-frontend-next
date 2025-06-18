"use client"
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const Footer = () => {
    const router = useRouter();
    const { language, t } = useLanguage()
    const d = new Date()
    return (
        <>
            <footer className="bg-black text-white pb-4">
                <div className="container">
                    <div className="row text-start">
                        {/* <!-- Company --> */}
                        <div className="col-6 col-md-3 mb-4">
                            <h6 className="fw-bold mb-3">{t.company}</h6>
                            <ul className="list-unstyled">
                                <li><a href onClick={() => router.push('/about')} className="footer-link">{t.aboutUs}</a></li>
                                <li><a href onClick={() => router.push('/investor')} className="footer-link">{t.investors}</a></li>
                                <li><a href onClick={() => router.push('/news')} className="footer-link">{t.blog}</a></li>
                                <li><a href onClick={() => router.push('/')} className="footer-link">{t.career}</a></li>
                            </ul>
                        </div>

                        {/* <!-- Products --> */}
                        <div className="col-6 col-md-3 mb-4">
                            <h6 className="fw-bold mb-3">{t.products}</h6>
                            <ul className="list-unstyled">
                                <li><a href onClick={() => router.push('/')} className="footer-link">{t.ride}</a></li>
                                <li><a href onClick={() => router.push('/driver')} className="footer-link">{t.drive}</a></li>
                                <li><a href onClick={() => router.push('/delivery')} className="footer-link">{t.deliver}</a></li>
                                <li><a href onClick={() => router.push('/hotel')} className="footer-link">{t.hotels}</a></li>
                                <li><a href onClick={() => router.push('/travel')} className="footer-link">{t.travel}</a></li>
                            </ul>
                        </div>

                        {/* <!-- Useful Links --> */}
                        <div className="col-6 col-md-3 mb-4">
                            <h6 className="fw-bold mb-3">{t.usefulLinks}</h6>
                            <ul className="list-unstyled">
                                <li><a href onClick={() => router.push('/news-details')} className="footer-link">{t.provacyPolicy}</a></li>
                                <li><a href onClick={() => router.push('/news-details')} className="footer-link">{t.termsAndConditions}</a></li>
                                <li><a href onClick={() => router.push('/news-details')} className="footer-link">{t.communityGuidelines}</a></li>
                                <li><a href onClick={() => router.push('/news-details')} className="footer-link">{t.gdpr}</a></li>
                                <li><a href onClick={() => router.push('/news-details')} className="footer-link">{t.safetyGuidelines}</a></li>
                            </ul>
                        </div>

                        {/* <!-- Download --> */}
                        <div className="col-6 col-md-3 mb-4">
                            <h6 className="fw-bold mb-3">{t.download}</h6>
                            {/* <!-- App Store & Play Store --> */}
                            <div className="d-flex flex-column gap-2 align-items-start">
                                <a href onClick={() => router.push('/news-details')} ><img src="/images/appstore.png" alt="App Store" className="store-badge app-store" /></a>
                                <a href onClick={() => router.push('/news-details')} ><img src="/images/playstore.png" alt="Google Play" className="store-badge" /></a>
                            </div>
                        </div>
                    </div>

                    <hr className="border-secondary" />

                    {/* <!-- Footer Bottom --> */}
                    <div
                        className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-3">
                        <p className="mb-0">&copy; {d.getFullYear()} romygo. {t.allRightsReserved}</p>

                        {/* <!-- Logo --> */}
                        <img src="/images/logo.png" alt="romygo logo" height="40" className="footImg" />

                        {/* <!-- Social Icons --> */}
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <a href onClick={() => router.push('/')} ><i className="fab fa-facebook-f footer-icon"></i></a>
                            <a href onClick={() => router.push('/')} ><i className="fab fa-instagram footer-icon"></i></a>
                            <a href onClick={() => router.push('/')} ><i className="fab fa-linkedin-in footer-icon"></i></a>
                            <a href onClick={() => router.push('/')} ><i className="fab fa-x-twitter footer-icon"></i></a>
                            <a href onClick={() => router.push('/')} ><i className="fab fa-youtube footer-icon"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer