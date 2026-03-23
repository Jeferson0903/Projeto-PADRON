import AboutThree from "@/components/sections/about/aboutThree"
import AchievementTwo from "@/components/sections/achievements/achievementTwo"
import ContactAddress from "@/components/sections/contact/contactAddress"
import ContactForm from "@/components/sections/contact/contactForm"
import ContactMap from "@/components/sections/contact/contactMap"
import HeroThree from "@/components/sections/heros/heroThree"
import MarqueTwo from "@/components/sections/marques/marqueTwo"
import ServicesThree from "@/components/sections/services/servicesThree"
import TestimonialThree from "@/components/sections/testimonials/testimonialThree"
import WorkProcess from "@/components/sections/workProcess"
import SectionTitle from "@/components/ui/sectionTitle"

const HomeThreeSingle = () => {
    return (
        <>
            <HeroThree />
            <AboutThree />
            <ServicesThree />
            <WorkProcess />
            <AchievementTwo achievementWrapperClass="style-2" className="section-bg-2" />
            <MarqueTwo className="section-padding" />
            <TestimonialThree />
            <section id="contact" className="contact-section fix section-padding section-bg-light">
                <div className="container">
                    <div className="text-center mb-5 pb-2">
                        <SectionTitle className="text-center">
                            <SectionTitle.SubTitle>Contato</SectionTitle.SubTitle>
                            <SectionTitle.Title>Fale conosco</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                    <div className="contact-wrapper-2">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <ContactAddress />
                            </div>
                            <div className="col-lg-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactMap />
        </>
    )
}

export default HomeThreeSingle