import React from 'react';

export default function MeetCEO() {
    return (
        <section className="meet-ceo-area pt-130">
            <div className="container-fluid p-0">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                        <div className="meet-ceo-content pl-100 pr-50 pt-120 pb-120">
                            <div className="section-title mb-40">
                                <span className="sub-title">Leadership</span>
                                <h2 className="ceo-title m-0">Meet the CEO</h2>
                            </div>

                            <div className="ceo-info-box">
                                <div className="info-icon">
                                    <img src="/assets/img/logo/malchand_logo_black.png" alt="Logo" />
                                </div>
                                <div className="info-text">
                                    <p>
                                        The World will see a big convergence of digital transformation, being human will be being digital. It’s time to reconnect with each other, let's come together for a new beginning using innovation, technology & entrepreneurship
                                    </p>
                                </div>
                            </div>

                            <div className="ceo-features">
                                <div className="ceo-feature-item">
                                    <div className="ceo-feature-icon">
                                        <i className="fas fa-user-tie"></i>
                                    </div>
                                    <span>Leadership</span>
                                </div>
                                <div className="ceo-feature-item">
                                    <div className="ceo-feature-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <span>Responsibility</span>
                                </div>
                                <div className="ceo-feature-item">
                                    <div className="ceo-feature-icon">
                                        <i className="fas fa-coins"></i>
                                    </div>
                                    <span>Traction</span>
                                </div>
                                <div className="ceo-feature-item">
                                    <div className="ceo-feature-icon">
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    <span>Expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 p-0">
                        <div className="ceo-image-wrap">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxYq69fUbpjSJ51Sp1RislJVfv_cPSGSvNeFeH3gAAw&s=10" alt="CEO" className="ceo-img" />
                            <div className="ceo-name-banner">
                                <strong>CEO</strong><br /> Sunil Kumar Sharma
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
