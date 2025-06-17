"use client"
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
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
                    <h1>Make more with <strong className="romyGoText">romygo</strong></h1>
                    <p>Drivers make the most amount of money on every ride.</p>
                    {/* <!-- <a href="#" className="btn btn-drive">Apply to drive</a> --> */}
                    <div className="hero-buttons drive-buttons d-flex flex-wrap align-items-center justify-content-center gap-3"
                        data-aos="zoom-in" data-aos-delay="400">
                        <a onClick={() => router.push('/auth/sign-up')} href className="btn btn-drive">Apply to drive</a>
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
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>You keep what you make</h2>
                            <p className="drive-description text-muted mb-2">
                                romygo drivers take home 100% of what they earn. That's the only fair deal and we make it
                                happen.
                            </p>

                            {/* <!-- Mission Toggle Section --> */}
                            <div className="romygo-mission-box mt-3">
                                <h4 className="mission-toggle fw-bold d-flex align-items-center justify-content-between"
                                    onClick={toggleRead}
                                    role='button'
                                >
                                    Read about romygo pay
                                    <span className={`chevron ${isReadOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isReadOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>
                                {isReadOpen && (
                                    <div className="mission-subtitle-box mt-3">
                                        <div className="mission-subtitle-content">
                                            <p>
                                                RomyGo Pay is built on a simple promise. What you earn is yours. Every time you
                                                complete a ride, you receive the full fare and every tip without the platform taking
                                                a single percentage. There are no hidden fees, no service charges, and no
                                                deductions. You put in the work, so you deserve every leu.

                                            </p>
                                            <p>
                                                This is how ride sharing should be. Transparent, fair, and driver focused. With
                                                RomyGo Pay, you are in control of your income from the first ride onward. Keep what
                                                you earn, grow on your terms, and drive knowing you are backed by a platform that
                                                respects your time.
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
                            <h2 className="drive-title fw-bold mb-2" style={{ fontSize: "40px" }}>We keep it safe</h2>
                            <p className="drive-description text-muted mb-2">
                                romygo is building a community of drivers, riders and corporate to deliver a spectacular
                                experience for everyone in Romania.
                            </p>

                            {/* <!-- Mission Toggle Section --> */}
                            <div className="romygo-mission-box mt-3">
                                <h4 className="mission-toggle fw-bold d-flex align-items-center justify-content-between "
                                    onClick={toggleSafety}
                                    role='button'
                                >
                                    Read our safety guidelines
                                    <span className={`chevron ${isSafetyOpen ? 'rotate' : ''}`}>
                                        <i className={`fas fa-chevron-${isSafetyOpen ? 'up' : 'down'}`}></i>
                                    </span>
                                </h4>
                                {isSafetyOpen && (
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
                                Make more money today</h2>
                            <p className="drive-description text-muted mb-4">
                                Drive with romygo and join our community of happy drivers who take 100% of what they make
                                everyday.
                            </p>
                            <div className="drive-buttons d-flex flex-wrap align-items-center gap-3">
                                <a onClick={() => router.push('/auth/sign-up')} href className="btn btn-drive">Apply Here</a>

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