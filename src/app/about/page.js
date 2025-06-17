"use client"
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
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
    console.log('isSafetyOpen', isSafetyOpen)
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
                    <h1>Welcome to <strong className="romyGoText">romygo</strong></h1>
                    <p>Drive with freedom, Ride with trust.</p>
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
                                For a better world
                            </h2>
                            <p className="drive-description text-muted mb-2">
                                romygo wants to see a better world. Better for the drivers, riders and the
                                environment we breathe and live in. It's this dedication that moves us every day.
                            </p>

                            {/* Mission Toggle Section */}
                            <div className="romygo-mission-box">
                                <h4
                                    className="mission-toggle fw-bold d-flex align-items-center justify-content-between"
                                    onClick={toggleMission}
                                    role="button"
                                >
                                    The romygo mission
                                    <span className={`chevron ${isMissionOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isMissionOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>

                                {isMissionOpen && (
                                    <div className="mission-subtitle-box mt-3">
                                        <div className="mission-subtitle-content">
                                            <p>
                                                We are romygo. Built for those who move the world forward. For the early starters,
                                                the late-night earners, and the everyday movers and shakers. We exist to connect
                                                people, places, and possibilities simply, instantly, and with purpose.
                                            </p>
                                            <p>
                                                Movement isn’t just what we enable, it’s what defines us. It’s the engine behind
                                                every ride, every delivery, every choice to show up and make something happen.
                                                From small towns to big cities, romygo empowers individuals to take control of
                                                their time, their income, and their direction.
                                            </p>
                                            <p>
                                                We’re a technology company grounded in reality where each tap has real-world
                                                impact. We bring together speed, safety, and simplicity to help people get where
                                                they need to be and earn more while doing it. And we’re building this not just for
                                                convenience, but for inclusion because freedom of movement and opportunity should
                                                belong to everyone. The opportunity to earn more, relax more and be happy more.
                                            </p>
                                            <p>
                                                Our platform isn’t about products – it’s about people. Drivers who earn with
                                                dignity. Riders who travel with trust. Families who get what they need without
                                                delay. We’re here for real-life needs, in real time, from a quick lift to a
                                                crucial delivery.
                                            </p>
                                            <p>
                                                We haven’t come this far by standing still. romygo was built on momentum – on
                                                asking what’s next, what’s better, what’s possible. That spirit of reinvention
                                                fuels everything we do. Every line of code. Every support call. Every new city we
                                                launch.
                                            </p>
                                            <p><strong>This is just the beginning.</strong></p>
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
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>People first</h2>
                            <p className="drive-description text-muted mb-2">
                                At romygo, we put people first. Our drivers, riders and the families that use romygo to move
                                every day. We want to create the safest eco-system for everyone involved in romygo everyday.
                            </p>

                            {/* <!-- Mission Toggle Section --> */}
                            <div className="romygo-mission-box mt-3">
                                <h4
                                    className="mission-toggle fw-bold d-flex align-items-center justify-content-between "
                                    onClick={toggleCommunity}
                                    role='button'
                                >
                                    Read our community guidelines
                                    <span className={`chevron ${isCommunityOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isCommunityOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>
                                {isCommunityOpen && (
                                    <div className="mission-subtitle-box mt-3"
                                        style={{ backgroundColor: "#faf8c9" }}>
                                        <div className="mission-subtitle-content">
                                            <p>
                                                We are romygo. Built for those who move the world forward. For the early starters,
                                                the late-night earners,
                                                and the everyday movers and shakers. We exist to connect people, places, and
                                                possibilities simply,
                                                instantly, and with purpose.
                                            </p>
                                            <p>
                                                Movement isn’t just what we enable, it’s what defines us. It’s the engine behind
                                                every ride, every delivery,
                                                every choice to show up and make something happen. From small towns to big cities,
                                                romygo empowers individuals
                                                to take control of their time, their income, and their direction.
                                            </p>
                                            <p>
                                                We’re a technology company grounded in reality where each tap has real-world impact.
                                                We bring together speed,
                                                safety, and simplicity to help people get where they need to be and earn more while
                                                doing it. And we’re building
                                                this not just for convenience, but for inclusion because freedom of movement and
                                                opportunity should belong to
                                                everyone. The opportunity to earn more, relax more and be happy more.
                                            </p>
                                            <p>
                                                Our platform isn’t about products – it’s about people. Drivers who earn with
                                                dignity. Riders who travel with trust.
                                                Families who get what they need without delay. We’re here for real-life needs, in
                                                real time, from a quick lift to
                                                a crucial delivery.
                                            </p>
                                            <p>
                                                We haven’t come this far by standing still. romygo was built on momentum – on asking
                                                what’s next, what’s better,
                                                what’s possible. That spirit of reinvention fuels everything we do. Every line of
                                                code. Every support call. Every
                                                new city we launch.
                                            </p>
                                            <p><strong>This is just the beginning.</strong></p>
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
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>We keep it safe</h2>
                            <p className="drive-description text-muted mb-2">
                                romygo is building a community of drivers, riders and corporate to deliver a spectacular
                                experience for everyone in Romania.
                            </p>

                            {/* <!-- Mission Toggle Section --> */}
                            <div className="romygo-mission-box mt-3">
                                <h4 className="mission-toggle fw-bold d-flex align-items-center justify-content-between "
                                    onClick={toggleSafety} role='button'>
                                    Read our safety guidelines
                                    <span className={`chevron ${isSafetyOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isSafetyOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>
                                {isSafetyOpen && (
                                    <div className="mission-subtitle-box mt-3">
                                        <div className="mission-subtitle-content">
                                            <p>
                                                We are romygo. Built for those who move the world forward. For the early starters,
                                                the late-night earners,
                                                and the everyday movers and shakers. We exist to connect people, places, and
                                                possibilities simply,
                                                instantly, and with purpose.
                                            </p>
                                            <p>
                                                Movement isn’t just what we enable, it’s what defines us. It’s the engine behind
                                                every ride, every delivery,
                                                every choice to show up and make something happen. From small towns to big cities,
                                                romygo empowers individuals
                                                to take control of their time, their income, and their direction.
                                            </p>
                                            <p>
                                                We’re a technology company grounded in reality where each tap has real-world impact.
                                                We bring together speed,
                                                safety, and simplicity to help people get where they need to be and earn more while
                                                doing it. And we’re building
                                                this not just for convenience, but for inclusion because freedom of movement and
                                                opportunity should belong to
                                                everyone. The opportunity to earn more, relax more and be happy more.
                                            </p>
                                            <p>
                                                Our platform isn’t about products – it’s about people. Drivers who earn with
                                                dignity. Riders who travel with trust.
                                                Families who get what they need without delay. We’re here for real-life needs, in
                                                real time, from a quick lift to
                                                a crucial delivery.
                                            </p>
                                            <p>
                                                We haven’t come this far by standing still. romygo was built on momentum – on asking
                                                what’s next, what’s better,
                                                what’s possible. That spirit of reinvention fuels everything we do. Every line of
                                                code. Every support call. Every
                                                new city we launch.
                                            </p>
                                            <p><strong>This is just the beginning.</strong></p>
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
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>Beyond rides</h2>
                            <p className="drive-description text-muted mb-2">
                                romygo will transform your food delivery, travel and hotel bookings too. Stay connected and
                                enjoy a true revolution in life.
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
                    <h1 className="mb-3">Company News</h1>
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