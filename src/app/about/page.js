"use client"
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/context/LanguageContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const { language, t } = useLanguage()
    const router = useRouter();
    const [isMissionOpen, setIsMissionOpen] = useState(false);
    const [isCommunityOpen, setCommunityOpen] = useState(false);
    const [isSafetyOpen, setSafetyOpen] = useState(false);

    const toggleMission = () => {
        setIsMissionOpen((prev) => !prev);
    };
    const toggleCommunity = () => {
        setCommunityOpen((prev) => !prev);
    };
    const toggleSafety = () => {
        setSafetyOpen((prev) => !prev);
    };

    return (
        <>
            {/* <!-- Hero Section --> */}
            <section className="hero-section about-hero">
                {/* <!-- Responsive image background --> */}
                <img src="/images/about.jpg" alt="About Background" className="hero-bg-img" />
                {/* <!-- Overlay layer --> */}
                <div className="hero-overlay"></div>
                {/* <!-- Navbar --> */}
                <Navigation />
                {/* <!-- Optional hero content can go here --> */}
                <div className="hero-content text-center" data-aos="fade-up" data-aos-delay="200">
                    <h1>{t.welcomeTo} <strong className="romyGoText">romygo</strong></h1>
                    <p>{t.driveWithFreedomRIdeWithTrust}</p>
                </div>
            </section>

            <section className="drive-section py-5">
                <div className="container">
                    <div className="row align-items-center flex-column flex-md-row gap-4 gap-md-0">
                        {/* Image Column */}
                        <div className="col-md-6 text-center">
                            <img
                                src="/images/world.jpg"
                                alt="Drive with romygo"
                                className="img-fluid drive-image"
                            />
                        </div>

                        {/* Text Column */}
                        <div className="col-md-6 drive-text text-center text-md-start">
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: '40px' }}>
                                {t.forABetterWorld}
                            </h2>
                            <p className="drive-description text-muted mb-2">
                                {t.romygoWantsToSeeABetterWorld}
                            </p>

                            {/* Mission Toggle Section */}
                            <div className="romygo-mission-box">
                                <h4
                                    className="mission-toggle fw-bold d-flex align-items-center justify-content-between"
                                    onClick={toggleMission}
                                    role="button"
                                >
                                    {t.theRomygoMission}
                                    <span className={`chevron ${isMissionOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isMissionOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>

                                {isMissionOpen && (
                                    <div className="mission-subtitle-box mt-3">
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
            {/* <!-- Drive Section 3rd section --> */}
            <section className="drive-section drive-section-second py-5">
                <div className="container">
                    <div className="row align-items-center flex-column flex-md-row gap-4 gap-md-0">
                        {/* <!-- Text Column --> */}
                        <div className="col-md-6 drive-text text-center text-md-start">
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>{t.peopleFirst}</h2>
                            <p className="drive-description text-muted mb-2">
                                {t.atRomygoWePut}
                            </p>

                            {/* <!-- Mission Toggle Section --> */}
                            <div className="romygo-mission-box mt-3">
                                <h4
                                    className="mission-toggle fw-bold d-flex align-items-center justify-content-between "
                                    onClick={toggleCommunity}
                                    role='button'
                                >
                                    {t.readOurCommunityGuidelines}
                                    <span className={`chevron ${isCommunityOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isCommunityOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>
                                {isCommunityOpen && (
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

                        {/* <!-- Image Column --> */}
                        <div className="col-md-6 text-center">
                            <img src="/images/family-vacation.jpg" alt="Drive with romygo" className="img-fluid drive-image-second" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="drive-section py-5">
                <div className="container">
                    <div className="row align-items-center flex-column flex-md-row gap-4 gap-md-0">

                        {/* <!-- Image Column --> */}
                        <div className="col-md-6 text-center">
                            <img src="/images/family-on-beach.jpg" alt="Drive with romygo" className="img-fluid drive-image" />
                        </div>
                        {/* <!-- Text Column --> */}
                        <div className="col-md-6 drive-text text-center text-md-start">
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>{t.weKeepItSafe}</h2>
                            <p className="drive-description text-muted mb-2">
                                {t.romygoIsBuildingACommunityOfDrivers}
                            </p>

                            {/* <!-- Mission Toggle Section --> */}
                            <div className="romygo-mission-box mt-3">
                                <h4 className="mission-toggle fw-bold d-flex align-items-center justify-content-between "
                                    onClick={toggleSafety} role='button'>
                                    {t.radOurSafetyGuidelines}
                                    <span className={`chevron ${isSafetyOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isSafetyOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>
                                {isSafetyOpen && (
                                    <div className="mission-subtitle-box mt-3">
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
            <section className="drive-section drive-section-second py-5">
                <div className="container">
                    <div className="row align-items-center flex-column flex-md-row gap-4 gap-md-0">
                        {/* <!-- Text Column --> */}
                        <div className="col-md-6 drive-text text-center text-md-start">
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>{t.beyondRides}</h2>
                            <p className="drive-description text-muted mb-2">
                                {t.romygoWillTransformYourFoodDelivery}
                            </p>

                        </div>
                        {/* <!-- Image Column --> */}
                        <div className="col-md-6 text-center">
                            <img src="/images/travel.jpg" alt="Drive with romygo" className="img-fluid drive-image-second" />
                        </div>



                    </div>
                </div>
            </section>
            {/* <!-- //News section --> */}
            {/* <!-- Grid Posts --> */}

            <div className="py-4 news-container" style={{ borderRadius: 0, marginBottom: "0px" }}>
                <div className="container">
                    <h1 className="mb-3">{t.companyNews}</h1>
                    <div className="row g-4">
                        {/* <!-- Post Item --> */}
                        <div className="col-md-4">
                            <a onClick={() => router.push('/news-details')} href>
                                <div className="post-card">
                                    <img src="/images/sec.jpg" alt="Post" />
                                    <div className="category">Engineering, Backend, Data / ML</div>
                                    <div className="title">Who's driving romygo</div>
                                    <small className="text-muted">March 27 / Global</small>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4">
                            <a onClick={() => router.push('/news-details')} href>
                                <div className="post-card">
                                    <img src="/images/secAnother.jpg" alt="Post" />
                                    <div className="category">Engineering, Backend</div>
                                    <div className="title">Who's driving romygo</div>
                                    <small className="text-muted">March 13 / Global</small>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4">
                            <a onClick={() => router.push('/news-details')} href>
                                <div className="post-card">
                                    <img src="/images/world.jpg" alt="Post" />
                                    <div className="category">Transit, Universities</div>
                                    <div className="title">Who's driving romygo</div>
                                    <small className="text-muted">March 3 / Global</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default page