"use client"
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/context/LanguageContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const { language, t } = useLanguage();
    const router = useRouter();
    const [isReadOpen, setReadOpen] = useState(false);
    const [isSafetyOpen, setSafetyOpen] = useState(false);

    const toggleRead = () => {
        setReadOpen((prev) => !prev);
    };
    const toggleSafety = () => {
        setSafetyOpen((prev) => !prev);
    };
    return (
        <>
            {/* <!-- Hero Section --> */}
            <section className="hero-section about-hero driver-section">
                {/* <!-- Responsive image background --> */}
                <img src="/images/driver.jpg" alt="About Background" className="hero-bg-img" />
                {/* <!-- Overlay layer --> */}
                <div className="hero-overlay"></div>
                {/* <!-- Navbar --> */}
                <Navigation />
                {/* <!-- Optional hero content can go here --> */}
                <div className="hero-content text-center">
                    <h1>{t.makeMoreWith} <strong className="romyGoText">romygo</strong></h1>
                    <p>{t.driversmakeTheMostAmountOfMoney}</p>
                    {/* <!-- <a href="#" className="btn btn-drive">Apply to drive</a> --> */}
                    <div className="hero-buttons drive-buttons d-flex flex-wrap align-items-center justify-content-center gap-3"
                        data-aos="zoom-in" data-aos-delay="400">
                        <a onClick={() => router.push('/auth/sign-up')} href className="btn btn-drive">{t.applyToDrive}</a>
                    </div>
                </div>
            </section>
            <section className="drive-section py-5">
                <div className="container">
                    <div className="row align-items-center flex-column flex-md-row gap-4 gap-md-0">

                        {/* <!-- Image Column --> */}
                        <div className="col-md-6 text-center">
                            <img src="/images/make.jpg" alt="Drive with romygo" className="img-fluid drive-image" />
                        </div>

                        {/* <!-- Text Column --> */}
                        <div className="col-md-6 drive-text text-center text-md-start">
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>{t.youKeepWhatYouMake}</h2>
                            <p className="drive-description text-muted mb-2">
                                {t.romygoDriversTakeHome}
                            </p>

                            {/* <!-- Mission Toggle Section --> */}
                            <div className="romygo-mission-box mt-3">
                                <h4 className="mission-toggle fw-bold d-flex align-items-center justify-content-between"
                                    onClick={toggleRead}
                                    role='button'
                                >
                                    {t.readAboutRomygoPay}
                                    <span className={`chevron ${isReadOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isReadOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>
                                {isReadOpen && (
                                    <div className="mission-subtitle-box mt-3">
                                        <div className="mission-subtitle-content">
                                            <p>
                                                {t.romygoPayIsBuildOnASimplePromise}

                                            </p>
                                            <p>
                                                {t.thisIsHowRideSharingShouldBe}
                                            </p>

                                            {/* <!-- <p><strong>This is just the beginning.</strong></p> --> */}
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="drive-section drive-section-second py-5">
                <div className="container">
                    <div className=" align-items-center flex-column flex-md-row gap-4 gap-md-0">
                        {/* <!-- Image Column --> */}
                        <div className=" text-center">
                            <img src="/images/safety.jpg" alt="Drive with romygo" className="img-fluid dirver-image" />
                        </div>

                        {/* <!-- Text Column --> */}
                        <div className="drive-text text-center text-md-start mt-3">
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>{t.weKeepIsSafe}</h2>
                            <p className="drive-description text-muted mb-2">
                                {t.romygoIsBuildingACommunityOfDrivers}
                            </p>

                            {/* <!-- Mission Toggle Section --> */}
                            <div className="romygo-mission-box mt-3">
                                <h4 className="mission-toggle fw-bold d-flex align-items-center justify-content-between "
                                    onClick={toggleSafety}
                                    role='button'
                                >
                                    {t.radOurSafetyGuidelines}
                                    <span className={`chevron ${isSafetyOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isSafetyOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>
                                {isSafetyOpen && (
                                    <div className="mission-subtitle-box mt-3"
                                        style={{ backgroundColor: "#faf8c9" }}>
                                        <div className="mission-subtitle-content">
                                            <p>
                                                {t.weAreRomygo}
                                            </p>
                                            <p>
                                                {t.movementIsNtJust}
                                            </p>
                                            <p>
                                                {t.weareTechnologyCompany}
                                            </p>
                                            <p>
                                                {t.ourPlatformIsNtAboutProducts}
                                            </p>
                                            <p>
                                                {t.wehaventComeThisFar}
                                            </p>
                                            <p><strong>{t.thisIsJustTheBegining}</strong></p>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="drive-section py-5" style={{ fontSize: "40px" }}>
                <div className="container">
                    <div className="row align-items-center flex-column flex-md-row gap-4 gap-md-0">

                        {/* <!-- Image Column --> */}
                        <div className="col-md-6 text-center">
                            <img src="/images/apply.jpg" alt="Drive with romygo" className="img-fluid drive-image" />
                        </div>

                        {/* <!-- Text Column --> */}
                        <div className="col-md-6 drive-text text-center text-md-start">
                            <h2 className="drive-title fw-bold mb-3">
                                {t.makeMoreMoneyToday}</h2>
                            <p className="drive-description text-muted mb-4">
                                {t.driveWithRomygoAndJoinOurCommunity}
                            </p>
                            <div className="drive-buttons d-flex flex-wrap align-items-center gap-3">
                                <a onClick={() => router.push('/auth/sign-up')} href className="btn btn-drive">{t.applyHere}</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page