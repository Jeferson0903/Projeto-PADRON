import SectionTitle from "@/components/ui/sectionTitle"
import { aboutAndersonImage, aboutAndersonParagraphs } from "@/db/aboutAndersonContent"

const AVATAR_FALLBACK =
    "https://ui-avatars.com/api/?name=Anderson+Carneiro&background=F5D000&color=111&size=512"

const AboutAnderson = () => {
    return (
        <section id="anderson" className="about-anderson-section section-padding fix">
            <div className="container">
                <div className="row align-items-center g-4 g-xl-5">
                    <div className="col-lg-5 wow slideUp" data-delay=".3">
                        <div className="about-anderson__photo-wrap">
                            <img
                                className="about-anderson__photo"
                                src={aboutAndersonImage}
                                alt="Anderson Carneiro — representante Padron Elétrica"
                                loading="lazy"
                                decoding="async"
                                onError={(e) => {
                                    const t = e.currentTarget
                                    t.onerror = null
                                    t.src = AVATAR_FALLBACK
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-anderson__content">
                            <SectionTitle>
                                <SectionTitle.SubTitle>Responsável pela Padron</SectionTitle.SubTitle>
                                <SectionTitle.Title>Anderson Carneiro</SectionTitle.Title>
                            </SectionTitle>
                            <div className="about-anderson__text mt-3 mt-md-4">
                                {aboutAndersonParagraphs.map((p) => (
                                    <p key={p.slice(0, 48)}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAnderson
