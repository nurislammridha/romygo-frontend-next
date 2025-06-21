"use client";
import React, { useState } from 'react'
import AuthFooter from '@/components/AuthFooter';
import { useRouter } from 'next/navigation';
import '../authStyles.css'; // Assuming you have a CSS file for styles
import { useLanguage } from '@/context/LanguageContext';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { showToast } from '@/utils/ToastHelper';
import { ToastContainer } from 'react-toastify';
const page = () => {
    const dispatch = useDispatch();
    const { language, t } = useLanguage();
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [passwordView, setPasswordView] = useState(false);
    const [confirmPasswordView, setConfirmPasswordView] = useState(false);
    const [passwordRules, setPasswordRules] = useState({
        minLength: false,
        upper: false,
        lower: false,
        number: false,
        special: false,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        if (name === "password") {
            setPasswordRules({
                minLength: value.length >= 8,
                upper: /[A-Z]/.test(value),
                lower: /[a-z]/.test(value),
                number: /[0-9]/.test(value),
                special: /[^A-Za-z0-9]/.test(value),
            });
        }
    };
    const validate = () => {
        const newErrors = {};

        // Name validation
        if (!form.name.trim()) {
            newErrors.name = "Name should not be empty";
        }
        if (!form.email.trim()) {
            newErrors.email = "Email should not be empty";
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(form.email)) {
                newErrors.email = "Email is invalid";
            }
        }
        // Phone validation (simple pattern)
        const phonePattern = /^[0-9]{10,15}$/;
        if (!form.phone.trim()) {
            newErrors.phone = "Phone should not be empty";
        } else if (!phonePattern.test(form.phone)) {
            newErrors.phone = "Phone number is invalid";
        }

        // Password rules check
        const { password } = form;
        const rules = {
            minLength: password.length >= 8,
            upper: /[A-Z]/.test(password),
            lower: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password),
        };

        if (!password) {
            newErrors.password = "Password should not be empty";
        } else {
            const unsatisfied = [];
            if (!rules.minLength) unsatisfied.push("at least 8 characters");
            if (!rules.upper || !rules.lower)
                unsatisfied.push("at least one uppercase and one lowercase letter");
            if (!rules.number) unsatisfied.push("at least one number");
            if (!rules.special) unsatisfied.push("at least one special character");

            if (unsatisfied.length > 0) {
                newErrors.password = `The Password field must contain ${unsatisfied.join(", ")}.`;
            }
        }

        // Confirm Password
        if (form.password && form.confirmPassword !== form.password) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setLoading(true);
            try {
                axios.post('https://app.romygo.com/api/v1/send-otp', { phone: form.phone })
                    .then((res) => {
                        setLoading(false);
                        localStorage.setItem("signup", JSON.stringify(form))
                        if (res.data.success) {
                            showToast("success", "OTP sent successfully");
                            router.push('/auth/sign-up-otp');
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
        }
    };

    return (<>
        <div className="auth-container">
            <div className="left-section">
                <a href onClick={() => router.push('/')}>
                    <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
                </a>

                <div className="form-box">
                    <div className="form-top">
                        <h2>{t.driveWithRomygo}</h2>
                        <p>{t.becomeRomygoDrivermakeMoreMoneyToday}</p>
                    </div>

                    <form className="form-bottom" onSubmit={handleSubmit}>

                        <label>{t.role} <span className="color-red">*</span></label>
                        <div className="role-buttons">
                            <button type="button" className="role-btn active" data-role="Gym">
                                <i className="fas fa-check-circle"></i> {t.driver}
                            </button>

                        </div>

                        <label>{t.name} <span className="color-red">*</span></label>
                        <input
                            type="text"
                            name="name"
                            placeholder={t.name}
                            value={form.name}
                            onChange={handleChange}
                            className={errors.name ? "input-error" : ""}
                        />
                        {errors.name && <p className="error-text">{errors.name}</p>}
                        <label>{"Phone"} <span className="color-red">*</span></label>
                        <input
                            type="text"
                            placeholder={"Phone"}
                            value={form.phone}
                            onChange={handleChange}
                            className={errors.phone ? "input-error" : ""}
                            name="phone"
                        />
                        {errors.phone && <p className="error-text">{errors.phone}</p>}

                        <label>{t.email} <span className="color-red">*</span></label>
                        <input
                            type="email"
                            placeholder={t.email}
                            value={form.email}
                            onChange={handleChange}
                            className={errors.email ? "input-error" : ""}
                            name="email"
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}

                        <label>{t.password} <span className="color-red">*</span></label>
                        <div className="password-wrapper">
                            <input
                                type={passwordView ? "text" : "password"}
                                placeholder={t.password}
                                value={form.password}
                                onChange={handleChange}
                                className={errors.password ? "input-error" : ""}
                                name="password"
                            />
                            <div onClick={() => setPasswordView((val) => !val)} className="password-toggle"><i className={`fas fa-eye${passwordView ? "-slash" : ""}`}></i></div>
                        </div>
                        {errors.password && <p className="error-text" style={{ marginTop: 10 }}>{errors.password}</p>}

                        <ul className="password-rules">
                            <li className={passwordRules.minLength ? "rule-passed" : ""}>{t.atleasteightCharacter}</li>
                            <li className={passwordRules.upper ? "rule-passed" : ""}>{t.atLeastOneUppercase}</li>
                            <li className={passwordRules.lower ? "rule-passed" : ""}>{t.atLeastOneLowerCas}</li>
                            <li className={passwordRules.number ? "rule-passed" : ""}>{t.atLeastoneNumber}</li>
                            <li className={passwordRules.special ? "rule-passed" : ""}>{t.atLeastOneSpecialCharacter}</li>
                        </ul>

                        <label>{t.confirmPassword} <span className="color-red">*</span></label>
                        <div className="password-wrapper">
                            <input
                                type={confirmPasswordView ? "Text" : "password"}
                                placeholder={t.confirmPassword}
                                value={form.confirmPassword}
                                onChange={handleChange}
                                className={errors.confirmPassword ? "input-error" : ""}
                                name="confirmPassword"
                            />
                            <div onClick={() => setConfirmPasswordView((val) => !val)} className="password-toggle"><i className={`fas fa-eye${confirmPasswordView ? "-slash" : ""}`}></i></div>
                        </div>
                        {errors.confirmPassword && <p className="error-text" style={{ marginTop: 10 }}>{errors.confirmPassword}</p>}
                        <div className="form-footer">
                            {t.byClickingSignUp} <a href="#">{t.termsOfUse}</a> {t.and} <a href="#">{t.privacyPolicy}</a>
                        </div>
                        <button
                            type='submit'
                            className="submit-btn">
                            {isLoading ? <div class="spinner-border spinner-border-sm me-2"></div> : <i className="fas fa-check-circle me-2"></i>}
                            {t.signUp}
                        </button>
                        <div className="form-footer">
                            {t.alreadyHaveAn}
                            <a onClick={() => router.push('/auth/login')} className='ms-1'>{t.signInHere}</a>
                        </div>
                    </form>
                </div>
                <AuthFooter />
            </div>
            <div className="right-section">
                <img src="/images/ban.jpg" alt="Sign Up" className="auth-image" />
            </div>
        </div>
        <ToastContainer />
    </>)
}

export default page