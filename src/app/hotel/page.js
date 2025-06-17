import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'

const page = () => {
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
                    <h1>Stay with <strong class="romyGoText">romygo</strong></h1>
                    <p>Hotel booking coming soon</p>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default page