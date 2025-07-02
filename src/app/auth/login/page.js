"use client";
import React, { useEffect, useState } from 'react'
import AuthFooter from '@/components/AuthFooter';
import { useRouter } from 'next/navigation';
import '../authStyles.css'; // Assuming you have a CSS file for styles
import { useLanguage } from '@/context/LanguageContext';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { showToast } from '@/utils/ToastHelper';
const page = () => {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [form, setForm] = useState({
    phone: "",
    password: ""
  });
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordView, setPasswordView] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

  };
  const validate = () => {
    const newErrors = {};

    // Phone validation
    const phonePattern = /^[0-9]{10,15}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Phone should not be empty";
    } else if (!phonePattern.test(form.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    // Password validation
    if (!form.password.trim()) {
      newErrors.password = "Password should not be empty";
    } else if (form.password.length < 8) {
      newErrors.password = "Password should be at least 8 characters long";
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
        axios.post('https://app.romygo.com/api/v1/login', form)
          .then((res) => {
            setLoading(false);
            if (res.data.success) {
              showToast("success", "Login successfully");
              // router.push('/');
              router.push(`https://app.romygo.com/authenticate?token=${encodeURIComponent(res?.data?.data?.token)}`);
              localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
              localStorage.setItem("access_token", res?.data?.data?.token);
              localStorage.setItem("isLoggedIn", true);
            } else {
              showToast("error", res.data.message || "Failed to login");
            }
          }).catch((error) => {
            setLoading(false);
            showToast("error", error?.response?.data?.message || "An error occurred during login");
            console.error("Error during .catch", error);
          })
      } catch (error) {
        setLoading(false);
        console.error("Error during sign up:", error);
        // Handle error (e.g., show a notification)
      }
    }
  };


  return (<>
    <div className="auth-container">
      <div className="left-section">
        <a href="#" onClick={() => router.push('/')}>
          <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
        </a>
        <div className="form-box">
          <div className="form-top">
            <h2>{t.driveWithRomygo}</h2>
            <p>{t.becomeRomygoDrivermakeMoreMoneyToday}</p>
          </div>

          <form className="form-bottom" onSubmit={handleSubmit}>
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

            <div className="forgot-password">
              <label>{t.password} <span className="color-red">*</span></label>
              <a onClick={() => router.push('/auth/forgot-password')} href>{t.forgotPassword}</a>
            </div>
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

            <div className="form-check d-flex align-items-center gap-2 mt-3 mb-3">
              <input className="form-check-input custom-check" type="checkbox" id="rememberMe" />
              <label className="form-check-label mb-0" for="rememberMe">
                {t.rememberMe}
              </label>
            </div>

            <button
              type='submit'
              className="submit-btn">
              {isLoading ? <div class="spinner-border spinner-border-sm me-2"></div> : <i className="fas fa-check-circle me-2"></i>}
              {"Login"}
            </button>
            <div className="form-footer">{t.dontHaveAnAccount} <a onClick={() => router.push('/auth/sign-up')} >{t.signupHere}</a></div>
          </form>
        </div>
        <AuthFooter />
      </div>

      <div className="right-section right-login">
        <img src="/images/login.jpg" alt="Sign Up" className="auth-image" />
      </div>
    </div>

  </>)
}

export default page