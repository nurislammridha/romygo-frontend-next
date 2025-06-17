import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'

const page = () => {
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
                    <h1>Deliver with <strong className="romyGoText">romygo</strong></h1>
                    <p>Food Delivery Coming Soon</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page