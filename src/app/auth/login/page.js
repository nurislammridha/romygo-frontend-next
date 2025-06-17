"use client";
import React from 'react'
import AuthFooter from '@/components/AuthFooter';
import { useRouter } from 'next/navigation';
import '../authStyles.css'; // Assuming you have a CSS file for styles
const page = () => {
  const router = useRouter();
  return (
    <div className="auth-container">
      <div className="left-section">
        <a href="#" onClick={() => router.push('/')}>
          <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
        </a>
        <div className="form-box">
          <div className="form-top">
            <h2>Drive with romygo</h2>
            <p>Become romygo driver and make more money today.</p>
          </div>

          <div className="form-bottom">
            <label>Email <span className="color-red">*</span></label>
            <input type="email" placeholder="Email" />

            <div className="forgot-password">
              <label>Password <span className="color-red">*</span></label>
              <a onClick={() => router.push('/auth/forgot-password')} href>Forgot Password?</a>
            </div>
            <div className="password-wrapper">
              <input type="password" placeholder="Password" />
              <div className="password-toggle"><i className="fas fa-eye"></i></div>
            </div>
            <div className="form-check d-flex align-items-center gap-2 mt-3 mb-3">
              <input className="form-check-input custom-check" type="checkbox" id="rememberMe" />
              <label className="form-check-label mb-0" for="rememberMe">
                Remember Me
              </label>
            </div>

            <button className="submit-btn"><i className="fas fa-check-circle"></i> Sign Up</button>
            <div className="form-footer">Don't have an account? <a onClick={() => router.push('/auth/sign-up')} >Sign Up here</a></div>
          </div>
        </div>
        <AuthFooter />
      </div>

      <div className="right-section right-login">
      </div>
    </div>
  )
}

export default page