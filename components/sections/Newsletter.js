export default function Newsletter() {
    return (
        <>
            <section className="newsletter-area section-pt-140 section-pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        <div className="newsletter-content">
                                            <div className="section-title mb-50">
                                                <span className="sub-title">Quick Inquiry</span>
                                                <h2 className="title">If you have any question? we are glad to consult you as soon as possible</h2>
                                            </div>
                                            <form action="#" className="newsletter-form">
                                                <div className="newsletter-form-fields">
                                                    <div className="row mb-3">
                                                        <div className="col-md-6 mb-3 mb-md-0">
                                                            <input type="text" className="form-control" placeholder="Your Name *" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="tel" className="form-control" placeholder="Mobile Number *" required />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-6 mb-3 mb-md-0">
                                                            <input type="email" className="form-control" placeholder="Email Address *" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <select className="form-select form-control" required>
                                                                <option value="" disabled selected>Select Subject *</option>
                                                                <option value="Buying">Buying</option>
                                                                <option value="Selling">Selling</option>
                                                                <option value="Leasing">Leasing</option>
                                                                <option value="Management">Management</option>
                                                                <option value="Alliance">Alliance</option>
                                                                <option value="Collaboration">Collaboration</option>
                                                                <option value="Franchise">Franchise</option>
                                                                <option value="Representative-INDIA">Representative-INDIA</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-12">
                                                            <textarea className="form-control" placeholder="Your Message" rows="4"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 text-center mt-20">
                                                            <button type="submit" className="btn-primary-standard">Submit Inquiry</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-check mt-30">
                                                    <input type="checkbox" className="form-check-input" id="checkbox" />
                                                    <label htmlFor="checkbox">I accept <span>Terms &amp Conditions</span> for processing personal data</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
