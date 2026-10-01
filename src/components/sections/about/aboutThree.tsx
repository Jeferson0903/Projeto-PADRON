import SectionTitle from "@/components/ui/sectionTitle"
import { SuHands } from "@/lib/icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import {
    aboutPadronChecklist,
    aboutPadronStoryParagraphs,
} from "@/db/aboutPadronContent"

const ABOUT_VIDEO_URL =
    "https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes/esse.mp4"
const ABOUT_VIDEO_POSTER = "/img/about/03.png"

const AboutThree = () => {
    const [videoFailed, setVideoFailed] = useState(false)
    return (
        <section id="about" className="about-section about-unified-home section-padding fix bg-cover">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row align-items-lg-center g-4 g-xl-5">
                        <div className="col-lg-6 wow slideUp" data-delay=".4">
                            <div className="about-image">
                                <div className="shape-image">
                                    <img src="/img/about/shape.png" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                </div>
                                <div className="circle-shape">
                                    <img src="/img/about/circle.png" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                </div>
                                <div className="about-media-frame">
                                    {videoFailed ? (
                                        <img
                                            className="about-main-video"
                                            src={ABOUT_VIDEO_POSTER}
                                            alt="Padron — soluções em elétrica e automação"
                                            loading="lazy"
                                            onError={(e) => {
                                                const t = e.currentTarget;
                                                t.onerror = null;
                                                t.src =
                                                    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80";
                                            }}
                                        />
                                    ) : (
                                        <video
                                            className="about-main-video"
                                            src={ABOUT_VIDEO_URL}
                                            poster={ABOUT_VIDEO_POSTER}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            aria-label="Padron — soluções em elétrica e automação"
                                            onError={() => setVideoFailed(true)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-2 mt-lg-0">
                            <div className="about-content about-content--home">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>Sobre nós</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Padron Elétrica</SectionTitle.Title>
                                </SectionTitle>
                                <div className="about-unified-home__story mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    {aboutPadronStoryParagraphs.map((p, i) => (
                                        <p
                                            key={p.slice(0, 40)}
                                            className={i === aboutPadronStoryParagraphs.length - 1 ? "about-unified-home__story-closing mb-0" : undefined}
                                        >
                                            {p}
                                        </p>
                                    ))}
                                </div>

                                <div className="about-unified-home__meta-panel wow slideUp" data-delay=".65">
                                    <p className="about-unified-home__meta-label">O que atendemos</p>
                                    <div className="row g-4 g-lg-3 align-items-stretch">
                                        <div className="col-md-7">
                                            <ul className="list about-unified-home__checklist mb-0">
                                                {aboutPadronChecklist.map((item) => (
                                                    <li key={item}>
                                                        <i className="fa-solid fa-check" aria-hidden />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="about-unified-home__stat-card">
                                                <div className="icon">
                                                    <SuHands />
                                                </div>
                                                <div className="content">
                                                    <h2>
                                                        <span className="count">500</span>+
                                                    </h2>
                                                    <span>Projetos realizados</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-unified-home__actions wow slideUp" data-delay=".8">
                                    <Link to="#services" className="theme-btn about-unified-home__btn-primary">
                                        Ver serviços
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=5521964937618&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Padron%20el%C3%A9trica"
                                        className="about-unified-home__whatsapp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="about-unified-home__whatsapp-icon" aria-hidden>
                                            <i className="fa-solid fa-phone" />
                                        </span>
                                        <span className="about-unified-home__whatsapp-text">
                                            <span className="line">Orçamento sem compromisso</span>
                                            <span className="line line--strong">WhatsApp</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutThree
