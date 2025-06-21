"use client";

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { showToast } from "@/utils/ToastHelper";

const activeHoursData = [
    { hour: "6 AM", value: 40 },
    { hour: "9 AM", value: 80 },
    { hour: "12 PM", value: 60 },
    { hour: "3 PM", value: 70 },
    { hour: "6 PM", value: 55 },
    { hour: "9 PM", value: 45 },
    { hour: "12 AM", value: 65 },
];

const earningsByDayData = [
    { day: "Mon", earnings: 60 },
    { day: "Tue", earnings: 80 },
    { day: "Wed", earnings: 40 },
    { day: "Thu", earnings: 70 },
    { day: "Fri", earnings: 90 },
    { day: "Sat", earnings: 100 },
    { day: "Sun", earnings: 100 },
];

export default function Dashboard() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [user, setUser] = useState(null);
    const [isLogin, setLogin] = useState(false)
    const router = useRouter();
    const { language, t } = useLanguage()
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        setLogin(false);
        showToast("success", "Logout successful");
        router.push("/auth/login");
    }
    useEffect(() => {
        localStorage.getItem("user") ? setUser(JSON.parse(localStorage.getItem("user"))) : setUser(null);
        // localStorage.getItem("isLoggedIn") === "true" ? setLogin(true) : (setLogin(false), router.push("/auth/login"))

    }, [])
    return (<>
        <section class="hero-section news-head">
            <Navigation user={user} />
        </section>
        <div className="d-flex flex-column flex-md-row min-vh-100">
            {/* Sidebar (Offcanvas on mobile) */}
            <aside
                className={`bg-light p-4 border-end ${showSidebar ? "d-block" : "d-none d-md-block"
                    }`}
                style={{ width: "220px", minHeight: "100vh" }}
            >
                {/* Toggle close on mobile */}
                <div className="d-md-none mb-3">
                    <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => setShowSidebar(false)}
                    >
                        <i className="fas fa-times"></i> Close
                    </button>
                </div>

                <ul className="nav flex-column gap-3 fs-6">
                    <li className="nav-item">
                        <a className="nav-link act-dash d-flex align-items-center" href="#">
                            <i className="fas fa-home me-2"></i> Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark d-flex align-items-center" href="#">
                            <i className="fas fa-dollar-sign me-2"></i> Earnings
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark d-flex align-items-center" href="#">
                            <i className="fas fa-file-alt me-2"></i> Documents
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark d-flex align-items-center" href="#">
                            <i className="fas fa-cog me-2"></i> Settings
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark d-flex align-items-center" href="#">
                            <i className="fas fa-question-circle me-2"></i> Support
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => handleLogout()} className="nav-link text-dark d-flex align-items-center" href="#">
                            <i className="fas fa-sign-out-alt me-2"></i> Logout
                        </a>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-grow-1 p-3 p-md-4">
                {/* Sidebar toggle button (mobile only) */}
                <div className="d-md-none mb-3">
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => setShowSidebar(true)}
                    >
                        <i className="fas fa-bars me-2"></i> Menu
                    </button>
                </div>

                <h2 className="fw-bold mb-4">Welcome back, Amelia</h2>

                {/* Earnings Summary */}
                <div className="mb-4">
                    <h5 className="mb-3">Your earnings</h5>
                    <div className="row g-3">
                        <div className="col-12 col-md-4">
                            <div className="bg-light rounded p-3 shadow-sm text-center">
                                <p className="text-muted mb-1">Today</p>
                                <h4 className="fw-semibold">$120</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-light rounded p-3 shadow-sm text-center">
                                <p className="text-muted mb-1">This week</p>
                                <h4 className="fw-semibold">$650</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-light rounded p-3 shadow-sm text-center">
                                <p className="text-muted mb-1">This month</p>
                                <h4 className="fw-semibold">$2,500</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div>
                    <h5 className="mb-3">Performance Insights</h5>
                    <div className="row g-4">
                        <div className="col-12 col-lg-6">
                            <div className="bg-light rounded p-3 shadow-sm h-100">
                                <h6 className="mb-3">Most Active Hours</h6>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={activeHoursData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="hour" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="bg-light rounded p-3 shadow-sm h-100">
                                <h6 className="mb-3">Peak Earning Periods</h6>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart layout="vertical" data={earningsByDayData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" />
                                        <YAxis type="category" dataKey="day" />
                                        <Tooltip />
                                        <Bar dataKey="earnings" fill="#82ca9d" radius={[0, 4, 4, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </>
    );
}
