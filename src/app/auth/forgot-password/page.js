"use client";
import React, { useState } from 'react'
import '../authStyles.css'; // Assuming you have a CSS file for styles
import AuthFooter from '@/components/AuthFooter';
import { useRouter } from 'next/navigation';
import '../authStyles.css'; // Assuming you have a CSS file for styles
import { useLanguage } from '@/context/LanguageContext';
import { showToast } from '@/utils/ToastHelper';
import axios from 'axios';
const page = () => {
  const { language, t } = useLanguage();
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [form, setForm] = useState({
    email: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const validate = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email should not be empty";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(form.email)) {
        newErrors.email = "Email is invalid";
      }
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
        const res = await axios.post('https://app.romygo.com/api/v1/forgot-password', { email: form.email });
        localStorage.setItem("email", form.email);
        if (res.data.success) {
          showToast("success", "OTP sent successfully");
          router.push('/auth/forgot-password-otp');
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
  return (
    <div className="auth-container">
      <div className="left-section">
        <a href="#" onClick={() => router.push('/')}>
          <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
        </a>
        <div className="form-box">
          <div className="form-top">
            <h2>{t.forgotPassword}</h2>
            <p>Enter your email to receive otp</p>
          </div>

          <form className="form-bottom" onSubmit={handleSubmit}>
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

            <button
              className="submit-btn"
              type='submit'
            >
              {isLoading ? <div class="spinner-border spinner-border-sm me-2"></div> : <i className="fas fa-check-circle me-2"></i>}
              Submit
            </button>
            {/* <button className="submit-btn"><i className="fas fa-check-circle"></i> {t.emailPasswordResetLink}</button> */}
            <div className="form-footer">{t.returnTo} <a href onClick={() => router.push('/auth/login')}>{t.signIn}</a></div>
          </form>
        </div>

        <AuthFooter />
      </div>

      <div className="right-section right-forgot">
        <img src="/images/passwordReset.jpg" alt="Sign Up" className="auth-image" />
      </div>
    </div>
  )
}

export default page