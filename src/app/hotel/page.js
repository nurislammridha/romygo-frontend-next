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
            <section class="hero-section about-hero driver-section">
                {/* <!-- Responsive image background --> */}
                <img src="/images/hotel.jpg" alt="About Background" class="hero-bg-img" />
                {/* <!-- Overlay layer --> */}
                <div class="hero-overlay"></div>
                {/* <!-- Navbar --> */}
                <Navigation />
                {/* <!-- Optional hero content can go here --> */}
                <div class="hero-content text-center invest-center">
                    <h1> {t.stayWith}<strong class="romyGoText">romygo</strong></h1>
                    <p>{t.hotelBookingComingSoon}</p>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default page