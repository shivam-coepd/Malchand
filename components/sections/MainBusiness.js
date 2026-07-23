import React from 'react';
import Link from 'next/link';

export default function MainBusiness() {
    const businessData = [
        {
            image: "/assets/img/images/buying_img.png",
            title: "Buying",
            desc: "Acquire highly profitable premium tourism & hospitality investments across India.",
            hoverOptions: ["Premium Hotels", "Luxurious Resorts", "Iconic Retreats"]
        },
        {
            image: "/assets/img/images/selling_img.png",
            title: "Selling",
            desc: "Maximize returns by divesting luxury assets through our exclusive global network.",
            hoverOptions: ["Premium Hotels", "Luxurious Resorts", "Iconic Retreats"]
        },
        {
            image: "/assets/img/images/leasing_img.png",
            title: "Leasing",
            desc: "Secure long-term leases for iconic properties to ensure sustainable revenue.",
            hoverOptions: ["Premium Hotels", "Luxurious Resorts", "Iconic Retreats"]
        }
    ];

    return (
        <section className="main-business-area section-pt-120 section-pb-90">
            <div className="container">
                {/* Header Section */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-60">
                            <span className="sub-title">Core Focus</span>
                            <h2 className="title">Exceptional Locations,<br />Unrivaled Lifestyles.</h2>
                            <p style={{ marginTop: '15px', color: 'var(--tg-body-font-color)', fontSize: '18px' }}>
                                Extraordinary Living is the brand's curated destination for stories and insights<br />
                                that celebrate the art of living well.
                            </p>
                            <Link href="#" className="btn-primary-standard mt-30">
                                EXPLORE MORE
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="row">
                    {businessData.map((item, index) => (
                        <div className="col-lg-4 col-md-6 mb-30 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`} key={index}>
                            <div className="business-item-wrap text-center">
                                {/* Image & Hover Overlay */}
                                <div className="business-img-container">
                                    <img src={item.image} alt={item.title} className="business-img" />

                                    {/* Hover Actions Overlay */}
                                    <div className="business-hover-actions">
                                        <div className="business-actions-inner">
                                            <Link href="#" className="business-action-btn slide-from-left">{item.hoverOptions[0]}</Link>
                                            <Link href="#" className="business-action-btn slide-from-right">{item.hoverOptions[1]}</Link>
                                            <Link href="#" className="business-action-btn slide-from-left delay-btn">{item.hoverOptions[2]}</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Vertical Line Connection */}
                                <div className="business-vertical-line"></div>

                                {/* Content */}
                                <div className="business-content">
                                    <h4 className="business-item-title">{item.title}</h4>
                                    <p className="business-item-desc">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
