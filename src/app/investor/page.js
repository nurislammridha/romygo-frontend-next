"use client";
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <>
            {/* <!-- Hero Section --> */}
            <section className="hero-section about-hero driver-section">
                {/* <!-- Responsive image background --> */}
                <img src="/images/investor.jpg" alt="About Background" className="hero-bg-img" />
                {/* <!-- Overlay layer --> */}
                <div className="hero-overlay"></div>
                {/* <!-- Navbar --> */}
                <Navigation />
                {/* <!-- Optional hero content can go here --> */}
                <div className="hero-content text-center invest-center">
                    <h1>Welcome to <strong className="romyGoText">romygo</strong> investor hub</h1>
                    <p>Invest in a reliable, scalable future of urban
                        transportation.</p>

                </div>
            </section>
            {/* <!-- Why Invest --> */}
            <section className="py-5 px-3 invest-topic">
                <div className="text-center mb-5">
                    <h2 className="section-title">Why invest in romygo?</h2>
                    <p className="section-description">
                        The ride-sharing and delivery economy is evolving. Traditional platforms take significant commissions,
                        alienating the very workers who keep them running. romygo flips the model by giving drivers and couriers
                        100 percent of their earnings while monetizing through support tools, loyalty services, and
                        partnerships. This structure builds unmatched driver loyalty and platform stability; two of the most
                        critical challenges in the on-demand economy today
                    </p>
                </div>

                <div className="container">
                    <div className="row g-4">
                        {/* <!-- Card 1 --> */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card-custom text-center">
                                <div className="card-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div className="card-title">Massive Market Opportunity</div>
                                <div className="card-text">
                                    romygo operates in one of the largest and fastest growing sectors in the global economy.
                                    With billions of dollars flowing into on demand transportation and delivery, the total
                                    addressable market continues to expand every year. By prioritizing both the driver and the
                                    end user, romygo is the better investment choice.
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card-custom text-center">
                                <div className="card-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="card-title">Global Scale</div>
                                <div className="card-text">
                                    romygo operates in thousands of cities across dozens of countries, with millions of active
                                    users. Our global platform is built for scale, driving growth and efficiency.
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-6 col-lg-4 mx-md-auto">
                            <div className="card-custom text-center">
                                <div className="card-icon">
                                    <i className="fas fa-globe"></i>
                                </div>
                                <div className="card-title">Competitive Advantages</div>
                                <div className="card-text">
                                    It is a differentiated platform built on three powerful advantages. First, our driver
                                    compensation model creates retention and loyalty that other platforms cannot match. Second,
                                    our technology stack is optimized for low cost growth, allowing us to scale without bloated
                                    overhead. Third, our approach to customer experience is driven by transparency,
                                    responsiveness, and trust.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Grid Posts --> */}
            <div className="investor-news py-4 news-container invest-topic " style={{ borderRadius: 0 }}>
                <div className="container">
                    {/* <!-- <div className="text-center mb-5">
                <h1 className="section-title">Our Business</h2>
                    <p className="section-description">
                        romygo is a global technology platform that connects riders with drivers, restaurants and stores
                        with delivery people, and consumers with merchants. We are a global company that is changing how
                        people move and how cities work.
                    </p>
            </div> --> */}
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our path to profitability</h2>
                        <p className="section-description">
                            romygo is a global technology platform that connects riders with drivers, restaurants and stores
                            with delivery people, and consumers with merchants. We are a global company that is changing how
                            people move and how cities work.
                        </p>
                    </div>
                    <div className="row g-4">
                        {/* <!-- Post Item --> */}
                        <div className="col-md-4 d-flex">
                            <a href className="w-100 text-decoration-none text-dark">
                                <div className="post-card border p-2 h-100 d-flex flex-column">
                                    <img src="/images/mobility.jpg" alt="Post" className="img-fluid" />
                                    <h4 className="section-title mt-3">Mobility</h4>
                                    <p className="section-description">
                                        romygo’s mobility service is the core of our platform. We connect riders with
                                        drivers in cities where affordable, reliable transportation is essential. Our
                                        approach prioritizes local flexibility, 0% commissions and highest retention among
                                        drivers and passengers. This creates a model that scales efficiently while keeping
                                        operating costs predictable.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 d-flex">
                            <a href className="w-100 text-decoration-none text-dark">
                                <div className="post-card border p-2 h-100 d-flex flex-column">
                                    <img src="/images/delivery.jpg" alt="Post" className="img-fluid" />
                                    <h4 className="section-title mt-3">Delivery</h4>
                                    <p className="section-description">
                                        Our delivery segment extends the romygo platform to merchants and consumers across
                                        food, retail, and essential goods. We enable fast, trusted delivery without charging
                                        commissions to merchants or couriers. Our delivery model is asset light, high
                                        margin, and aligned with growing trends in online commerce. With every new
                                        restaurant or store onboarded, our network density and delivery economics improve.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 d-flex">
                            <a href className="w-100 text-decoration-none text-dark">
                                <div className="post-card border p-2 h-100 d-flex flex-column">
                                    <img src="/images/travelInvestor.jpg" alt="Post" className="img-fluid" />
                                    <h4 className="section-title mt-3">Travel</h4>
                                    <p className="section-description">
                                        romygo opens a new and valuable channel by offering customers an easy way to book
                                        air tickets at the lowest available prices. Through direct integrations with global
                                        distribution systems and airline partners, we cut out costly intermediaries and pass
                                        the savings to travelers. Each booking strengthens our ecosystem, adds non cyclical
                                        revenue, and deepens user engagement across mobility and delivery.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <section className="py-5 px-3 invest-topic" style={{ marginBottom: "0px" }}>
                <div className="text-center">
                    <h2 className="section-title">Invest in romygo</h2>
                    <p className="section-description">
                        romygo is a global technology platform that connects riders with drivers, restaurants and stores with
                        delivery people, and consumers with merchants. We are a global company that is changing how people move
                        and how cities work.
                    </p>
                    <div className="mt-4 drive-buttons d-flex flex-wrap align-items-center justify-content-center gap-3">
                        <a onClick={() => router.push('/auth/sign-up')} href className="btn btn-drive">Invest in romygo</a>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default page