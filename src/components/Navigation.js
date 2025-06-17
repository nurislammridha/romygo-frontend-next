"use client";
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Navigation = () => {
    const router = useRouter();
    const pathname = usePathname();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About romygo', path: '/about' },
        { name: 'Become Driver', path: '/driver' },
        { name: 'Investor', path: '/investor' },
        { name: 'News', path: '/news' },
    ];
    return (
        <>
            <header className="navbar navbar-expand-lg fixed-top smart-navbar">
                <div className="container">
                    <div className="d-flex align-items-center gap-3">
                        <a onClick={() => router.push("/")} className="navbar-brand d-flex align-items-center gap-2 text-white" href>

                            <img src="/images/logo.png" alt="Romygo Logo" height="28" />

                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navMenu">
                        <ul className="navbar-nav mx-auto gap-lg-4 gap-2 text-center">
                            {navItems.map((item) => (
                                <li
                                    key={item.path}
                                    onClick={() => router.push(item.path)}
                                    className="nav-item"
                                >
                                    <a
                                        href="#"
                                        className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3">
                            {/* <!-- Language Switcher --> */}
                            <div className="dropdown">
                                <button className="btn btn-sm btn-outline-light d-flex align-items-center gap-1 lang-switcher"
                                    type="button" data-bs-toggle="dropdown">
                                    <span className="lang-icon">
                                        <svg className="lang-svg" fill="none" stroke-width="1.5" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                        </svg>
                                    </span>
                                    EN
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">EN - English</a></li>
                                    <li><a className="dropdown-item" href="#">RO - Romanian</a></li>
                                </ul>
                            </div>

                            {/* <!-- Auth Buttons --> */}
                            <a href onClick={() => router.push("/auth/login")} className="btn btn-outline-light btn-sm rounded-pill px-3 mt-2 mt-lg-0">Log in</a>
                            <a href onClick={() => router.push("/auth/sign-up")} className="btn btn-yellow btn-sm rounded-pill px-3 text-dark mt-2 mt-lg-0">Sign Up</a>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigation