"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Parallax() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            videoUrl: "https://cdn.pixabay.com/video/2025/02/16/258708_large.mp4", // Replace with Hotels video
            subtitle: "Luxury Boutique 3, 4 & 5 Star",
            title: "Exceptional Hotels",
            description: "Buying, Selling & Leasing of world-class hotel properties across India.",
            ctaText: "Explore Hotels",
            ctaLink: "#"
        },
        {
            videoUrl: "https://cdn.pixabay.com/video/2015/10/27/1188-143842652_large.mp4", // Replace with Resorts video
            subtitle: "Exotic Destinations",
            title: "Premium Resorts",
            description: "Curated resort investments offering unparalleled hospitality experiences.",
            ctaText: "Discover Resorts",
            ctaLink: "#"
        },
        {
            videoUrl: "https://cdn.pixabay.com/video/2015/10/16/1027-142621279_large.mp4", // Replace with Retreats video
            subtitle: "Exclusive Getaways",
            title: "Iconic Residential Vacation Retreats",
            description: "Invest in legacy vacation retreats that redefine luxury living.",
            ctaText: "View Retreats",
            ctaLink: "#"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 10000); // 10 seconds per slide

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="premium-hero-slider">
            <div className="slider-video-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slider-video-item ${index === activeSlide ? 'active' : ''}`}
                    >
                        <video
                            src={slide.videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="video-bg"
                        />
                        <div className="video-overlay"></div>
                    </div>
                ))}
            </div>

            <div className="container custom-container hero-content-container">
                <div className="row">
                    <div className="col-lg-8 hero-text-grid">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`hero-content-block ${index === activeSlide ? 'active' : ''}`}
                            >
                                <span className="hero-subtitle wow fadeInUp">{slide.subtitle}</span>
                                <h1 className="hero-premium-title wow fadeInUp" data-wow-delay=".2s">
                                    {slide.title}
                                </h1>
                                <p className="hero-description wow fadeInUp" data-wow-delay=".4s">
                                    {slide.description}
                                </p>
                                <div className="hero-btn-wrap wow fadeInUp" data-wow-delay=".6s">
                                    <Link href={slide.ctaLink} className="btn hero-outline-btn">
                                        <div className="btn_m">
                                            <div className="btn_c">
                                                <div className="btn_t1">{slide.ctaText}</div>
                                                <div className="btn_t2">{slide.ctaText}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="banner-scroll-down">
                <Link href="#" className="section-link">
                    <span />
                    <span />
                    <span />
                </Link>
            </div>

            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator-item ${index === activeSlide ? 'active' : ''}`}
                        onClick={() => setActiveSlide(index)}
                    >
                        <span className="indicator-number">0{index + 1}</span>
                        <div className="loader-square">
                            {index === activeSlide && (
                                <div className="loader-fill"></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
