"use client";
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

            <div class="container  news-details" style={{ marginBottom: "20px" }}>
                <div class="content-container">
                    <img src="/images/about.jpg" class="post-image" alt="Post Image" />

                    <h1>Who's driving romygo</h1>
                    <div class="meta">Posted on <strong>May 29</strong> · Category: <span class="theme-text">Romygo</span>
                    </div>

                    <div class="content">
                        <p>
                            What if chatbots could deliver near-human precision? In this post, we explore how Romygo's Genie
                            team
                            adapted
                            agentic retrieval-augmented generation (RAG) to build a more intelligent, responsive, and accurate
                            AI assistant.
                        </p>

                        <p>
                            We break down the system design, how we trained custom retrieval modules, and how it performs in
                            complex use
                            cases such as internal knowledge management and automated customer support. Our benchmarks show
                            marked
                            improvements in relevance, clarity, and confidence.
                        </p>

                        <p>
                            Continue reading to discover how hybrid models and smart orchestration unlock more powerful chat
                            experiences.
                        </p>

                        <a onClick={() => router.push('/news')} class="btn btn-theme mt-3">Back to Blog</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page