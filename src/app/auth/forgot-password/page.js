"use client";
import React from 'react'
import '../authStyles.css'; // Assuming you have a CSS file for styles
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
            <h2>Forgot Password</h2>
            <p>Enter your email to receive a password reset link</p>
          </div>

          <div className="form-bottom">
            <label>Email <span className="color-red">*</span></label>
            <input type="email" placeholder="Email" />
            <button className="submit-btn"><i className="fas fa-check-circle"></i> Email Password Reset Link</button>
            <div className="form-footer">Return to <a href="#">Sign In</a></div>
          </div>
        </div>

        <AuthFooter />
      </div>

      <div className="right-section right-forgot">

      </div>
    </div>
  )
}

export default page