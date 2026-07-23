import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';

function AboutUsStyleOne({ sectionSpace }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="X7R-q9rsrtU"
                onClose={() => setOpen(false)}
            />
            <div className={`ltn__about-us-area ${sectionSpace}`}>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} className="align-self-center">
                            <div className="about-us-img-wrap about-img-left">
                                <img src="/assets/img/images/about_img.jpg" alt="About Us Image" />
                                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                                    <div className="ltn__video-img ltn__animation-pulse1">
                                        <img src="/assets/img/images/about_us_img.jpg" alt="video popup bg image" />
                                        <button
                                            onClick={() => setOpen(true)}
                                            className="ltn__video-icon-2"
                                        >
                                            <FaPlay />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="align-self-center">
                            <div className="about-us-info-wrap">
                                <div className="section-title mb-20">
                                    <span className="sub-title">Who we are?</span>
                                    <h2 className="title">
                                        Premier Real Estate Tourism & Hospitality Investments<span>.</span>
                                    </h2>
                                    <p>
                                        Malchand is a Premier Real Estate Tourism & Hospitality Business Investment Company With 3 Decades of Industry Experience in Buying – Selling – Leasing of Luxury Boutique 3,4 & 5 Star Category of Hotels, Resorts and Iconic Residential Vacation Retreats in India.
                                    </p>
                                </div>
                                <ul className="ltn__list-item-half clearfix">
                                    <li>
                                        <i className="flaticon-home-2"></i>
                                        Luxury Hospitality
                                    </li>
                                    <li>
                                        <i className="flaticon-mountain"></i>
                                        3 Decades Experience
                                    </li>
                                    <li>
                                        <i className="flaticon-heart"></i>
                                        Fully Integrated Firm
                                    </li>
                                    <li>
                                        <i className="flaticon-secure"></i>
                                        Value Creation
                                    </li>
                                </ul>
                                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                                    <p>
                                        We are Experts, Pioneers, Innovators and Forecasters, a fully integrated investment firm focused on Identifying and Creating Value Within the Luxury Tourism and Hospitality Business Sector in India.
                                    </p>
                                </div>
                                <div className="btn-wrapper animated mt-30">
                                    <Link
                                        href="/service"
                                        className="btn-primary-standard"
                                    >
                                        OUR SERVICES
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AboutUsStyleOne;
