"use client";
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const { language, t } = useLanguage();
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
                    <h1>{t.welcomeTo} <strong className="romyGoText">romygo</strong> {t.investorHub}</h1>
                    <p>{t.investInAReliableScalable}</p>

                </div>
            </section>
            {/* <!-- Why Invest --> */}
            <section className="py-5 px-3 invest-topic">
                <div className="text-center mb-5">
                    <h2 className="section-title">{t.whyInvestInRomygo}</h2>
                    <p className="section-description">
                        {t.theRideSharingAndDeliveryEconomy}
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
                                <div className="card-title">{t.massiveMarketOpportunity}</div>
                                <div className="card-text">
                                    {t.romygoOperatesInOneOfThe}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card-custom text-center">
                                <div className="card-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="card-title">{t.globalScale}</div>
                                <div className="card-text">
                                    {t.romygoOperatesInThousandsOfCities}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-6 col-lg-4 mx-md-auto">
                            <div className="card-custom text-center">
                                <div className="card-icon">
                                    <i className="fas fa-globe"></i>
                                </div>
                                <div className="card-title">{t.competitiveAdvantages}</div>
                                <div className="card-text">
                                    {t.itIsDefferentiatedPlatformBuilt}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Grid Posts --> */}
            <div className="investor-news py-4 news-container invest-topic " style={{ borderRadius: 0 }}>
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.OurPathToProfitability}</h2>
                        <p className="section-description">
                            {t.romygoIsAGlobalTechnologyPlatform}
                        </p>
                    </div>
                    <div className="row g-4">
                        {/* <!-- Post Item --> */}
                        <div className="col-md-4 d-flex">
                            <a href className="w-100 text-decoration-none text-dark">
                                <div className="post-card border p-2 h-100 d-flex flex-column">
                                    <img src="/images/mobility.jpg" alt="Post" className="img-fluid" />
                                    <h4 className="section-title mt-3">{t.mobility}</h4>
                                    <p className="section-description">
                                        {t.romygosMobilityServiceIsTheCore}
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 d-flex">
                            <a href className="w-100 text-decoration-none text-dark">
                                <div className="post-card border p-2 h-100 d-flex flex-column">
                                    <img src="/images/delivery.jpg" alt="Post" className="img-fluid" />
                                    <h4 className="section-title mt-3">{t.delivery}</h4>
                                    <p className="section-description">
                                        {t.ourDeliverySegmentExtends}
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 d-flex">
                            <a href className="w-100 text-decoration-none text-dark">
                                <div className="post-card border p-2 h-100 d-flex flex-column">
                                    <img src="/images/travelInvestor.jpg" alt="Post" className="img-fluid" />
                                    <h4 className="section-title mt-3">{t.travel}</h4>
                                    <p className="section-description">
                                        {t.romygoOpensANewAndValuable}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <section className="py-5 px-3 invest-topic" style={{ marginBottom: "0px" }}>
                <div className="text-center">
                    <h2 className="section-title">{t.investInRomygo}</h2>
                    <p className="section-description">
                        {t.romygoIsAGlobalTechnologyPlatform}
                    </p>
                    <div className="mt-4 drive-buttons d-flex flex-wrap align-items-center justify-content-center gap-3">
                        <a onClick={() => router.push('/auth/sign-up')} href className="btn btn-drive">{t.investInRomygo}</a>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default page