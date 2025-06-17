'use client';

import { useEffect, useState } from 'react';


export default function CookieModal() {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedDesc, setSelectedDesc] = useState('essential');
    const [preferences, setPreferences] = useState({
        essential: true,
        ads: false,
        analytics: false,
    });
    const [hideAnimation, setHideAnimation] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) setShowModal(true);
    }, []);

    const handleConsent = (accepted) => {
        localStorage.setItem(
            'cookieConsent',
            JSON.stringify({ ...preferences, accepted })
        );
        setHideAnimation(true);
        setTimeout(() => setShowModal(false), 500);
    };

    const savePreferences = () => {
        localStorage.setItem(
            'cookieConsent',
            JSON.stringify({ ...preferences, accepted: true })
        );
        setHideAnimation(true);
        setTimeout(() => setShowModal(false), 500);
    };

    const selectCookieOption = (type) => {
        setSelectedDesc(type);
    };

    return (
        showModal && (
            <div
                id="cookieModal"
                className={`cookie-modal shadow-lg ${hideAnimation ? 'hide-animation' : 'slide-in'}`}
            >
                {step === 1 ? (
                    <div id="cookieStep1">
                        <h5>We use cookies</h5>
                        <p>
                            Click “Accept” to enable Romygo to use cookies to personalize this
                            site, deliver ads, and measure effectiveness on other apps and
                            websites, including social media. Customize your preferences in
                            your "Cookie settings" or click "Reject" if you do not want to use
                            cookies for this purpose.
                        </p>
                        <div className="d-flex justify-content-between mt-3">
                            <button
                                className="btn btn-light"
                                onClick={() => setStep(2)}
                            >
                                Cookie settings
                            </button>
                            <div>
                                <button
                                    className="btn btn-outline-secondary me-2"
                                    onClick={() => handleConsent(false)}
                                >
                                    Reject
                                </button>
                                <button
                                    className="btn btn-dark"
                                    onClick={() => handleConsent(true)}
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id="cookieStep2">
                        <h5 className="mb-3">We use cookies</h5>
                        <div className="row">
                            <div className="col-5 border-end pe-3">
                                {['essential', 'ads', 'analytics'].map((type) => (
                                    <div
                                        key={type}
                                        className="cookie-option mb-1 d-flex flex-column"
                                        onClick={() => selectCookieOption(type)}
                                    >
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input me-2"
                                                id={type}
                                                checked={preferences[type]}
                                                disabled={type === 'essential'}
                                                onChange={() =>
                                                    setPreferences((prev) => ({
                                                        ...prev,
                                                        [type]: !prev[type],
                                                    }))
                                                }
                                            />
                                            <label
                                                htmlFor={type}
                                                className="form-check-label text-nowrap mb-0"
                                            >
                                                {type === 'essential'
                                                    ? 'Essential'
                                                    : type === 'ads'
                                                        ? 'Targeted advertising'
                                                        : 'Analytics'}
                                            </label>
                                        </div>
                                        <div
                                            id={`underline-${type}`}
                                            className={`underline${selectedDesc === type ? ' active' : ''
                                                }`}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-7 ps-4">
                                <div
                                    id="desc-essential"
                                    className={`cookie-desc${selectedDesc !== 'essential' ? ' d-none' : ''
                                        }`}
                                >
                                    <p>
                                        Essential cookies are necessary for features which are
                                        essential to your use of our site or services, such as
                                        account login, authentication, and site security.
                                    </p>
                                </div>
                                <div
                                    id="desc-ads"
                                    className={`cookie-desc${selectedDesc !== 'ads' ? ' d-none' : ''
                                        }`}
                                >
                                    <p>
                                        Targeted advertising cookies allow Romygo to share your data
                                        with media companies to send you more relevant ads on other
                                        apps and websites.
                                    </p>
                                </div>
                                <div
                                    id="desc-analytics"
                                    className={`cookie-desc${selectedDesc !== 'analytics' ? ' d-none' : ''
                                        }`}
                                >
                                    <p>
                                        Analytics cookies allow Romygo to analyze your visits and
                                        actions to offer you more relevant ads.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <button
                                className="btn btn-light"
                                onClick={() => setStep(1)}
                            >
                                Hide
                            </button>
                            <div>
                                <button
                                    className="btn btn-outline-secondary me-2"
                                    onClick={() => handleConsent(false)}
                                >
                                    Reject
                                </button>
                                <button
                                    className="btn btn-dark"
                                    onClick={savePreferences}
                                >
                                    Accept cookies
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
}
