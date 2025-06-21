"use client";

import React, { useState, useEffect } from "react";
import AuthFooter from "@/components/AuthFooter";
import { useRouter } from "next/navigation";
import "../authStyles.css";
import { useLanguage } from "@/context/LanguageContext";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showToast } from "@/utils/ToastHelper";

const Page = () => {
    const { language, t } = useLanguage();
    const router = useRouter();
    let duration = 60; // 2 minutes in seconds
    const [form, setForm] = useState({ otp: "" });
    const [isLoading, setLoading] = useState(false);
    const [isResendLoading, setResendLoading] = useState(false);
    const [signup, setSignup] = useState({});
    const [errors, setErrors] = useState({});
    const [secondsLeft, setSecondsLeft] = useState(duration); // 2 minutes
    const [showResend, setShowResend] = useState(false);

    useEffect(() => {
        if (secondsLeft > 0) {
            const timer = setTimeout(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setShowResend(true);
        }
    }, [secondsLeft]);
    useEffect(() => {
        setSignup(JSON.parse(localStorage.getItem("signup")) || {});
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.otp.trim()) {
            newErrors.otp = "Otp should not be empty";
        } else if (form.otp.length !== 4) {
            newErrors.otp = "Otp must be 4 characters long";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        const postData = {
            phone: signup.phone,
            name: signup.name,
            email: signup.email,
            password: signup.password,
            dob: "2014-12-31",
            gender: "Male"
        }
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setLoading(true);
            try {
                axios.post('https://app.romygo.com/api/v1/verify-otp', { phone: signup.phone, otp: form.otp })
                    .then((res) => {
                        if (res.data.success) {

                            axios.post('https://app.romygo.com/api/v1/register', postData)
                                .then((res) => {
                                    localStorage.setItem("signup", {})
                                    setLoading(false);
                                    if (res.data.success) {
                                        showToast("success", "You are registered successfully");
                                        router.push('/');
                                        localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
                                        localStorage.setItem("access_token", res?.data?.data?.token);
                                        localStorage.setItem("isLoggedIn", true);
                                    } else {
                                        showToast("error", res.data.message || "Failed to sign up");
                                    }
                                }).catch((error) => {
                                    console.error("Error during sign up:", error);
                                })
                        } else {
                            showToast("error", res.data.message || "Failed to verify OTP");
                        }
                    }).catch((error) => {
                        setLoading(false);
                        showToast("error", error?.response?.data?.message || "An error occurred during OTP verification");
                        console.error("Error during sign up:", error);
                    })
            } catch (error) {
                setLoading(false);
                showToast("error", "An error occurred during sign up");
                console.error("Error during otp", error);
                // Handle error (e.g., show a notification)
            }
        }
    };

    const handleResend = () => {
        setResendLoading(true);
        try {
            axios.post('https://app.romygo.com/api/v1/send-otp', { phone: signup.phone })
                .then((res) => {
                    console.log('res', res)
                    setResendLoading(false);
                    if (res.data.success) {
                        showToast("success", "OTP sent successfully");
                        setSecondsLeft(duration);
                        setShowResend(false);
                    } else {
                        showToast("error", res.data.message || "Failed to send OTP");
                    }
                }).catch((error) => {
                    console.error("Error during sign up:", error);
                })
        } catch (error) {
            console.error("Error during sign up:", error);
            // Handle error (e.g., show a notification)
        }
    };

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const sec = (seconds % 60).toString().padStart(2, "0");
        return `${min}:${sec}`;
    };

    return (<>
        <div className="auth-container">
            <div className="left-section">
                <a href="#" onClick={() => router.push("/")}>
                    <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
                </a>

                <div className="form-box">
                    <div className="form-top">
                        <h2>{t.driveWithRomygo}</h2>
                        <p>{t.becomeRomygoDrivermakeMoreMoneyToday}</p>
                    </div>

                    <form className="form-bottom" onSubmit={handleSubmit}>
                        <label>
                            OTP <span className="color-red">*</span>
                        </label>
                        <input
                            type="text"
                            name="otp"
                            placeholder="Enter OTP"
                            value={form.otp}
                            onChange={handleChange}
                            className={errors.otp ? "input-error" : ""}
                        />
                        {errors.otp && <p className="error-text">{errors.otp}</p>}

                        <div style={{ margin: "10px 0", fontWeight: "bold" }}>
                            {showResend ? (
                                <button
                                    type="button"
                                    onClick={handleResend}
                                    className="resend-btn"
                                    style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer" }}
                                >
                                    {isResendLoading && <div class="spinner-border spinner-border-sm mr-2"></div>}  Resend OTP
                                </button>
                            ) : (
                                <span>OTP expires in: {formatTime(secondsLeft)}</span>
                            )}
                        </div>

                        <button
                            type='submit'
                            className="submit-btn">
                            {isLoading ? <div class="spinner-border spinner-border-sm me-2"></div> : <i className="fas fa-check-circle me-2"></i>}
                            {t.signUp}
                        </button>
                    </form>
                </div>
                <AuthFooter />
            </div>
            <div className="right-section"></div>
        </div>
        <ToastContainer />
    </>
    );
};

export default Page;
