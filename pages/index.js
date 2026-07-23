import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/Banner"
import Newsletter from "@/components/sections/Newsletter"
import Parallax from "@/components/sections/Parallax"
import Roadmap from "@/components/sections/Roadmap"
import Services from "@/components/sections/Services"
import AboutUsStyleOne from "./about-us"
import MainBusiness from "@/components/sections/MainBusiness"
import MeetCEO from "@/components/sections/MeetCEO"

export default function Home7() {

    return (
        <>
            <Layout>
                <Parallax />
                <Banner />
                <Services />
                <AboutUsStyleOne sectionSpace="section-pb-140" />
                <MainBusiness />
                <MeetCEO />
                <Roadmap />
                <Newsletter />
            </Layout>
        </>
    )
}