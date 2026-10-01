import AboutThree from "@/components/sections/about/aboutThree"
import AboutAnderson from "@/components/sections/about/aboutAnderson"
import AchievementTwo from "@/components/sections/achievements/achievementTwo"
import ContactAddress from "@/components/sections/contact/contactAddress"
import ContactMap from "@/components/sections/contact/contactMap"
import HeroThree from "@/components/sections/heros/heroThree"
import MarqueTwo from "@/components/sections/marques/marqueTwo"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ServicesThree from "@/components/sections/services/servicesThree"
import TestimonialThree from "@/components/sections/testimonials/testimonialThree"
import WorkProcess from "@/components/sections/workProcess"
import SectionTitle from "@/components/ui/sectionTitle"

/**
 * Ordem da home (fluxo do visitante):
 * 1. Impacto + CTA (hero)
 * 2. Sobre a Padron (#about) — segunda seção
 * 3. Reforço de serviços (faixa)
 * 4. O que fazemos (serviços)
 * 5. Como contratamos (processo)
 * 6. Quem lidera (Anderson)
 * 7. Números (credibilidade)
 * 8. Prova social (depoimentos)
 * 9. Parceiros
 * 10. Contato + mapa
 */
const HomeThreeSingle = () => {
    return (
        <main className="home-padron-main">
            <HeroThree />
            <AboutThree />
            <MarqueTwo className="home-marquee-after-hero" />
            <ServicesThree />
            <WorkProcess />
            <AboutAnderson />
            <AchievementTwo
                id="resultados"
                achievementWrapperClass="style-2"
                className="section-bg-2"
            />
            <TestimonialThree />
            <PartnersOne className="section-padding-sm" />
            <section id="contact" className="contact-section fix section-padding section-bg-light">
                <div className="container">
                    <div className="text-center mb-5 pb-2">
                        <SectionTitle className="text-center">
                            <SectionTitle.SubTitle>Contato</SectionTitle.SubTitle>
                            <SectionTitle.Title>Fale conosco</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                    <div className="contact-wrapper-2">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <ContactAddress />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactMap />
        </main>
    )
}

export default HomeThreeSingle
