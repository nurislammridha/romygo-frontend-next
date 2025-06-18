"use client";

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import React from 'react';
export default function Home() {
  const router = useRouter();
  const { language, t } = useLanguage()
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="hero-section">
        {/* <!-- Navbar --> */}
        <Navigation />

        {/* <!-- Hero Text --> */}

        <div className="container text-center hero-text" data-aos="fade-up" data-aos-delay="200">
          {t.getMovingInRomaniaWith}<br /><strong className="romyGoText">romygo</strong>
        </div>

        <div className="hero-buttons mt-4 d-flex justify-content-center gap-3 flex-wrap" data-aos="zoom-in"
          data-aos-delay="400">
          <a href="#" className="btn btn-ride">{t.rideWithRomygo}</a>
          <a onClick={() => router.push('/driver')} className="btn btn-drive" href>{t.driveWithRomygo}</a>
        </div>
      </section>
      {/* <!-- Drive Section (below hero) --> */}
      <section className="drive-section py-5">
        <div className="container">
          <div className="row align-items-center flex-column flex-md-row gap-4 gap-md-0">

            {/* <!-- Image Column --> */}
            <div className="col-md-6 text-center">
              <img src="/images/sec.jpg" alt="Drive with romygo" className="img-fluid drive-image" />
            </div>

            {/* <!-- Text Column --> */}
            <div className="col-md-6 drive-text">
              <h2 className="drive-title fw-bold mb-3">{t.driveWhenYouWantKeepAllYouMake}</h2>
              <p className="drive-description text-muted mb-3">
                {t.driveOrDeliverOn}
              </p>
              <div className="drive-buttons d-flex flex-wrap align-items-center gap-3">
                <a onClick={() => router.push('/auth/sign-up')} href className="btn btn-drive">{t.getStarted}</a>
                <p className="mb-0 drive-link-text">
                  <a onClick={() => router.push('/auth/login')} href className="sign-in-link">{t.alreadyHaveAnAccount}</a>
                </p>
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
            <div className="col-md-6 drive-text">
              <h2 className="drive-title fw-bold mb-3">{t.theRomygoYouKnow}</h2>
              <p className="drive-description text-muted mb-3">
                {t.romygoAllowsYouToMaintain}
              </p>
              <div className="drive-buttons d-flex flex-wrap align-items-center gap-3">
                <a onClick={() => router.push('/auth/sign-up')} href className="btn btn-drive">{t.getStarted}</a>
                <p className="mb-0 drive-link-text">
                  <a onClick={() => router.push('/auth/login')} href className="sign-in-link">{t.alreadyHaveAnAccount}</a>
                </p>
              </div>
            </div>
            {/* <!-- Image Column --> */}
            <div className="col-md-6 text-center">
              <img src="/images/secAnother.jpg" alt="Drive with romygo" className="img-fluid drive-image-second" />
            </div>



          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {/* <!-- Rider App --> */}
          <div className="col-12 col-md-6">
            <div className="download-card">
              <div className="download-text">
                <h5>{t.downloadTheRiderApp}</h5>
                <p>{t.scanToDownload}</p>
              </div>
              <img src="/images/qr.png" alt="Rider App QR" className="qr-img" />

            </div>
          </div>

          {/* <!-- Driver App --> */}
          <div className="col-12 col-md-6">
            <div className="download-card">
              <img src="/images/qr.png" alt="Driver App QR" className="qr-img" />
              <div className="download-text">
                <h5>{t.downloadTheDriverApp}</h5>
                <p>{t.scanToDownload}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="custom-card d-flex justify-content-between align-items-center flex-column flex-lg-row">
              <div>
                <h3 className="fw-bold mb-2">
                  {t.fromUnderdogToGlobalLeader}<br />
                  {t.aJourneyOfGrowthAndInnovation}
                </h3>
                <p className="mb-3">
                  {t.discoverHowRomygoReinvented}
                </p>
                <button className="download-btn">{t.downloadTheApp}</button>
              </div>
              <div>
                <img src="/images/smart.png" alt="Download the app" className="download-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}
