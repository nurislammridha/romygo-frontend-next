"use client"
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/context/LanguageContext';
import React from 'react'

const page = () => {
    const { language, t } = useLanguage();
    return (
        <>
            {/* <!-- Hero Section --> */}
            <section className="hero-section about-hero driver-section">
                {/* <!-- Responsive image background --> */}
                <img src="/images/deliveryPage.jpg" alt="About Background" className="hero-bg-img" />
                {/* <!-- Overlay layer --> */}
                <div className="hero-overlay"></div>
                {/* <!-- Navbar --> */}
                <Navigation />
                {/* <!-- Optional hero content can go here --> */}
                <div className="hero-content text-center invest-center">
                    <h1>{t.deliverWith} <strong className="romyGoText">romygo</strong></h1>
                    <p>{t.foodDeliveryComingSoon}</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page