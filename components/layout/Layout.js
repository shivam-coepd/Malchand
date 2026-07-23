import { useEffect, useState } from 'react'
import BackToTop from '../elements/BackToTop'
import Footer from './Footer'
import Header from './Header'
import PageHead from './PageHead'

export default function Layout({ headTitle, children, noFooter }) {

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()
    }, [])

    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Scroll Header
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <PageHead headTitle={headTitle} />
            <Header scroll={scroll} handleMobileMenu={handleMobileMenu} />

            <main>
                {children}
            </main>
            {noFooter ? null : < Footer />}

            <BackToTop />
        </>
    )
}
