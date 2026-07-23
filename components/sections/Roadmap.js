import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: ".h1n",
        prevEl: ".h1p",
    },

    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
};

export default function Roadmap() {
    return (
        <>
            <section className="roadmap-area section-py-140">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">Awards &amp recognition</span>
                                <h2 className="title">The Merits we have earned</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-12">
                        <div className="roadmap-wrap">
                            <div className="swiper-container roadmap-active">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="roadmap-item">
                                            <h4 className="title">2007</h4>
                                            <div className="roadmap-content">
                                                <span className="dot" />
                                                <p>Successfully acquired our first flagship portfolio of 5-star properties, establishing our footprint in India's luxury hospitality sector.</p>
                                                <span>
                                                    ET Now Real Estate Awards <br /> Most Promising Delivery
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmap-item">
                                            <h4 className="title">2010</h4>
                                            <div className="roadmap-content">
                                                <span className="dot" />
                                                <p>Pioneered the integration of sustainable luxury resorts, transforming exotic destinations into high-yield premium investments.</p>
                                                <span>
                                                    Design &amp Development Awards <br /> Ideal Project Design
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmap-item">
                                            <h4 className="title">2011</h4>
                                            <div className="roadmap-content">
                                                <span className="dot" />
                                                <p>Expanded our operations nationally, facilitating landmark transactions in the boutique hotel and premium retreat markets.</p>
                                                <span>
                                                    National Real Estate Awards <br /> Best Luxury Company
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmap-item">
                                            <h4 className="title">2014</h4>
                                            <div className="roadmap-content">
                                                <span className="dot" />
                                                <p>Brokered the sale of an iconic heritage vacation retreat, setting new industry benchmarks for high-value property valuation.</p>
                                                <span>
                                                    Golden Globe Tiger Awards <br /> Property of the Year
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmap-item">
                                            <h4 className="title">2019</h4>
                                            <div className="roadmap-content">
                                                <span className="dot" />
                                                <p>Launched our innovative leasing division, securing long-term operational profitability for elite hospitality asset owners.</p>
                                                <span>
                                                    BAM Awards Real Best <br />
                                                    Creative builder
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmap-item">
                                            <h4 className="title">2026</h4>
                                            <div className="roadmap-content">
                                                <span className="dot" />
                                                <p>Celebrating three decades of unrivaled expertise by unveiling an exclusive global network for bespoke hospitality investments.</p>
                                                <span>
                                                    Design &amp Development Awards <br /> Ideal Project Design
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
