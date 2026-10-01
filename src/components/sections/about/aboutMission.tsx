import SectionTitle from "@/components/ui/sectionTitle"
import { aboutPadronMission, aboutPadronStoryParagraphs } from "@/db/aboutPadronContent"

type AboutMissionProps = {
    layout?: "default" | "home"
}

/** Página Sobre: bloco de missão com os mesmos parágrafos da home. */
const AboutMission = ({ layout = "default" }: AboutMissionProps) => {
    const isHome = layout === "home"
    const m = aboutPadronMission
    return (
        <section
            className={`about-mission-section section-padding fix${isHome ? " about-mission-section--home" : ""}`}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className={isHome ? "col-lg-10 col-xl-8" : "col-lg-10 col-xl-9"}>
                        <div className="about-mission-content text-center">
                            <SectionTitle>
                                <SectionTitle.SubTitle>{m.subtitle}</SectionTitle.SubTitle>
                                <SectionTitle.Title>{m.title}</SectionTitle.Title>
                            </SectionTitle>
                            <div className="mission-text mt-4 wow slideUp" data-delay=".4">
                                {aboutPadronStoryParagraphs.map((p, i) => (
                                    <p
                                        key={p.slice(0, 40)}
                                        className={
                                            i === aboutPadronStoryParagraphs.length - 1 ? "fw-semibold mt-4 mb-0" : undefined
                                        }
                                    >
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMission
