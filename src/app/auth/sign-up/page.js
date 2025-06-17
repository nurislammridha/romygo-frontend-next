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
                <a href onClick={() => router.push('/')}>
                    <img src="/images/logo12.png" alt="Gymscanner Logo" className="logo" />
                </a>

                <div className="form-box">
                    <div className="form-top">
                        <h2>Drive with romygo</h2>
                        <p>Become romygo driver and make more money today.</p>
                    </div>

                    <div className="form-bottom">

                        <label>Role <span className="color-red">*</span></label>
                        <div className="role-buttons">
                            <button type="button" className="role-btn active" data-role="Gym">
                                <i className="fas fa-check-circle"></i> Driver
                            </button>

                        </div>

                        <label>Name <span className="color-red">*</span></label>
                        <input type="text" placeholder="Name" />

                        <label>Email <span className="color-red">*</span></label>
                        <input type="email" placeholder="Email" />

                        <label>Password <span className="color-red">*</span></label>
                        <div className="password-wrapper">
                            <input type="password" placeholder="Password" />
                            <div className="password-toggle"><i className="fas fa-eye"></i></div>
                        </div>
                        <ul className="password-rules">
                            <li>At least 8 characters</li>
                            <li>At least one uppercase letter</li>
                            <li>At least one lowercase letter</li>
                            <li>At least one number</li>
                            <li>At least one special character</li>
                        </ul>

                        <label>Confirm Password <span className="color-red">*</span></label>
                        <div className="password-wrapper">
                            <input type="password" placeholder="Confirm Password" />
                            <div className="password-toggle"><i className="fas fa-eye"></i></div>
                        </div>

                        <div className="form-footer">
                            By clicking "Sign Up" I agree to Gymscanner's <a href="#">Terms Of Use</a> and <a href="#">Privacy
                                Policy</a>
                        </div>
                        <button className="submit-btn"><i className="fas fa-check-circle"></i> Sign Up</button>
                        <div className="form-footer">Already have an account? <a onClick={() => router.push('/auth/login')} >Sign In here</a></div>
                    </div>
                </div>
                <AuthFooter />
            </div>
            <div className="right-section"> </div>
        </div>
    )
}

export default page