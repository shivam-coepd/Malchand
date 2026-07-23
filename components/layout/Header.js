import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Header({ handleMobileMenu, scroll }) {
    return (
        <>
            <header className={`header-style-six header-exact-match ${!scroll ? "header-initial-state" : ""}`}>
                <div className="header-top">
                    <div className="container custom-container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="header-top-left custom-header-top-left">
                                    <ul className="list-wrap top-info-list">
                                        <li><i className="fas fa-envelope"></i> <Link href="mailto:info@malchand.com">info@malchand.com</Link></li>
                                        <li><i className="fas fa-map-marker-alt"></i> Paras Trinity, Golf Course Extension, Gurgaon - INDIA</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="header-top-right custom-header-top-right">
                                    <div className="header-lang">
                                        <Link href="#">English <i className="fas fa-angle-down"></i></Link>
                                    </div>
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link href="#"><i className="fas fa-globe"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`menu-area transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap custom-menu-wrap">
                                    <nav className="menu-nav">
                                        <div className={scroll ? "logo px-10" : "logo pt-15"}>
                                            <Link href="/" className="sticky-logo">
                                                <img src={scroll ? "/assets/img/logo/malchand_logo_black.png" : "/assets/img/logo/malchand_logo.png"} alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="active "><Link href="/">Home</Link>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="#">About</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="#">Overview</Link></li>
                                                        <li><Link href="#">Mission</Link></li>
                                                        <li><Link href="#">Vision</Link></li>
                                                        <li><Link href="#">Our Team</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="#">Property</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="#">Hotels</Link></li>
                                                        <li><Link href="#">Resorts</Link></li>
                                                        <li><Link href="#">Retreats</Link></li>
                                                    </ul>
                                                </li>
                                                <li className=""><Link href="#">News</Link>
                                                </li>
                                                <li className=""><Link href="#">Services</Link>
                                                </li>
                                                <li><Link href="#">Contact</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-btn">
                                                    <Link href="#" className="btn hero-outline-btn header-solid-btn">
                                                        <div className="btn_m">
                                                            <div className="btn_c">
                                                                <div className="btn_t1">Add Listing</div>
                                                                <div className="btn_t2">Add Listing</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/malchand_logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
