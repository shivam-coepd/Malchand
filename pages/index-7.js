import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Banner6 from "@/components/sections/Banner6"
import Blog from "@/components/sections/Blog"
import Counter from "@/components/sections/Counter"
import Mission from "@/components/sections/Mission"
import Newsletter from "@/components/sections/Newsletter"
import Parallax from "@/components/sections/Parallax"
import Project3 from "@/components/sections/Project3"
import Roadmap from "@/components/sections/Roadmap"
import Services from "@/components/sections/Services"
import Services2 from "@/components/sections/Services2"
import Team from "@/components/sections/Team"
import Testimonial2 from "@/components/sections/Testimonial2"
import Video from "@/components/sections/Video"
import AboutUsStyleOne from "./about-us"
import MainBusiness from "@/components/sections/MainBusiness"
import MeetCEO from "@/components/sections/MeetCEO"

export default function Home7() {

    return (
        <>
            <Layout headerStyle={7}>
                <Parallax />
                <Banner6 />
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