"use client";
import React, { useEffect, useState } from 'react'
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
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [form, setForm] = useState({
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setLoading(true);
            try {
                const res = await axios.post('https://app.romygo.com/api/v1/reset-password', { email, otp, new_password: form.password });

                if (res.data.success) {
                    showToast("success", "Password change successfully");
                    router.push('/auth/login');
                } else {
                    showToast("error", res.data.message || "Failed to send OTP");
                }
            } catch (error) {
                setLoading(false);
                if (error.response && error.response.status === 422) {
                    // Laravel validation error
                    const errors = error.response.data.message; // e.g. { phone: ["The phone has already been taken."] }
                    const firstField = Object.keys(errors)[0];
                    const firstMessage = errors[firstField][0];
                    showToast("error", firstMessage);
                } else {
                    console.error("Error during sign up:", error);
                    showToast("error", "Something went wrong. Please try again.");
                }
            }

        }
    };
    useEffect(() => {
        setEmail(localStorage.getItem('email'))
        setOtp(localStorage.getItem('otp'))
    }, [])

    return (<>
        <div className="auth-container">
            <div className="left-section">
                <a href onClick={() => router.push('/')}>
                    <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
                </a>

                <div className="form-box">
                    <div className="form-top">
                        <h2>{t.forgotPassword}</h2>
                        <p>Generate new password</p>
                    </div>

                    <form className="form-bottom" onSubmit={handleSubmit}>

                        <label>New Password <span className="color-red">*</span></label>
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

                        <button
                            type='submit'
                            className="submit-btn">
                            {isLoading ? <div class="spinner-border spinner-border-sm me-2"></div> : <i className="fas fa-check-circle me-2"></i>}
                            Submit
                        </button>

                    </form>
                </div>
                <AuthFooter />
            </div>
            <div className="right-section right-forgot">
                <img src="/images/passwordReset.jpg" alt="Sign Up" className="auth-image" />
            </div>
        </div>
        {/* <ToastContainer /> */}
    </>)
}

export default page