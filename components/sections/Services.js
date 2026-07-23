import Link from "next/link"

export default function Services() {
    return (
        <>
            <section className="services-area section-pt-140 section-pb-140">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title">What We Do</span>
                                <h2 className="title">Premium Hospitality Real Estate in India</h2>
                                <p style={{ marginTop: '15px', color: 'var(--tg-body-font-color)', fontSize: '18px' }}>
                                    We offer comprehensive <strong>Buying, Selling, and Leasing</strong> services across India's most exclusive hospitality and residential properties.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="services-thumb">
                                    <Link href="#"><img src="/assets/img/images/cat_hotel.png" alt="Premium Hotels" /></Link>
                                </div>
                                <div className="services-content">
                                    <h2 className="title"><Link href="#">Premium & Luxury Hotels</Link></h2>
                                    <p>We specialize in the buying, selling, and leasing of premium and luxury hotel properties across India, delivering exceptional value and exclusive opportunities for hospitality investors.</p>
                                    <Link href="#" className="text-btn">Learn more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="services-thumb">
                                    <Link href="#"><img src="/assets/img/images/cat_resort.png" alt="Resorts" /></Link>
                                </div>
                                <div className="services-content">
                                    <h2 className="title"><Link href="#">Exclusive Resorts</Link></h2>
                                    <p>Discover unparalleled resort investments. Our expert team facilitates the buying, selling, and leasing of high-end resorts across India's most sought-after exotic destinations.</p>
                                    <Link href="#" className="text-btn">Learn more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="services-thumb">
                                    <Link href="#"><img src="/assets/img/images/cat_retreat.png" alt="Vacation Retreats" /></Link>
                                </div>
                                <div className="services-content">
                                    <h2 className="title"><Link href="#">Luxury Vacation Retreats</Link></h2>
                                    <p>Invest in legacy properties. We offer comprehensive buying, selling, and leasing services for iconic residential vacation retreats, ensuring maximum profitability and exclusive ownership.</p>
                                    <Link href="#" className="text-btn">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
