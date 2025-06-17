"use client"
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <>
            {/* <!-- Hero Section --> */}
            <section class="hero-section news-head">
                <Navigation />
            </section>
            <div class="container py-5 news-container" style={{ marginBottom: "20px" }}>
                {/* <!-- Featured Post --> */}
                <a onClick={() => router.push('/news-details')} >
                    <div class="row mb-5">
                        <div class="col-lg-6">
                            <img src="/images/about.jpg" class="img-fluid rounded featured" alt="Featured" />
                        </div>
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <div class="category">Engineering, Data / ML, Romygo</div>
                            <h2 class="mt-2">Who's driving romygo</h2>
                            <p class="description">
                                We're building a culture within romygo that emphasizes doing the right thing, period, for riders,
                                drivers, and employees. Find out more about the team that’s leading the way.
                            </p>
                            <small class="text-muted">May 29 / Global</small>
                        </div>
                    </div>
                </a>

                {/* <!-- Grid Posts --> */}
                <div class="row g-4">
                    {/* <!-- Post Item --> */}
                    <div class="col-md-4">
                        <a onClick={() => router.push('/news-details')} >
                            <div class="post-card">
                                <img src="/images/sec.jpg" alt="Post" />
                                <div class="category">Engineering, Backend, Data / ML</div>
                                <div class="title">Who's driving romygo</div>
                                <small class="text-muted">March 27 / Global</small>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4">
                        <a onClick={() => router.push('/news-details')} >
                            <div class="post-card">
                                <img src="/images/secAnother.jpg" alt="Post" />
                                <div class="category">Engineering, Backend</div>
                                <div class="title">Who's driving romygo</div>
                                <small class="text-muted">March 13 / Global</small>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4">
                        <a onClick={() => router.push('/news-details')} >
                            <div class="post-card">
                                <img src="/images/world.jpg" alt="Post" />
                                <div class="category">Transit, Universities</div>
                                <div class="title">Who's driving romygo</div>
                                <small class="text-muted">March 3 / Global</small>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4">
                        <a onClick={() => router.push('/news-details')} >
                            <div class="post-card">
                                <img src="/images/sec.jpg" alt="Post" />
                                <div class="category">Engineering, Backend</div>
                                <div class="title">Who's driving romygo</div>
                                <small class="text-muted">February 27 / Global</small>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4">
                        <a onClick={() => router.push('/news-details')} >
                            <div class="post-card">
                                <img src="/images/secAnother.jpg" alt="Post" />
                                <div class="category">Engineering, Backend</div>
                                <div class="title">Who's driving romygo</div>
                                <small class="text-muted">February 13 / Global</small>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4">
                        <a onClick={() => router.push('/news-details')} >
                            <div class="post-card">
                                <img src="/images/world.jpg" alt="Post" />
                                <div class="category">Engineering, Backend</div>
                                <div class="title">Who's driving romygo</div>
                                <small class="text-muted">January 30 / Global</small>
                            </div>
                        </a>

                    </div>
                </div>

                <div class="text-center mt-5">
                    <a href="#" class="btn btn-outline-dark btn-theme">View more stories</a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page