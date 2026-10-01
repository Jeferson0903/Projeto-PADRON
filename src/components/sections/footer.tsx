import { Link } from "react-router-dom";
import { SITE_LOGO_SRC } from "@/constants/siteLogo";

const quickLinks = [
    { text: "Sobre", link: "/#about" },
    { text: "Serviços", link: "/#services" },
    { text: "Processo", link: "/#process" },
    { text: "Anderson", link: "/#anderson" },
    { text: "Depoimentos", link: "/#depoimentos" },
    { text: "Contato", link: "/#contact" },
];

const services = [
    { text: "Elétrica & Automação", link: "/#services" },
    { text: "Padrão LIGHT", link: "/#services" },
    { text: "CFTV", link: "/#services" },
    { text: "Porteiro Eletrônico", link: "/#services" },
    { text: "Contato", link: "/#contact" },
];

const socialReviewLinks = [
    {
        icon: "fa-brands fa-whatsapp",
        label: "WHATSAPP",
        link: "https://api.whatsapp.com/send?phone=5521964937618&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Padron%20el%C3%A9trica",
    },
    {
        icon: "fa-brands fa-instagram",
        label: "INSTAGRAM",
        link: "https://www.instagram.com/eletrica_padron/",
    },
];

const Footer = () => {
    // Função para rolar suavemente para o topo
    const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer-section footer-bg" style={{ position: 'relative' }}>
            <div className="footer-social-review">
                <div className="container">
                    <div className="row justify-content-center g-4">
                        {socialReviewLinks.map((item, index) => (
                            <div
                                key={index}
                                className="col-auto wow slideUp"
                                data-delay={`${0.2 * index}`}
                            >
                                <div className="footer-social-review-item">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-review-icon"
                                        aria-label={item.label}
                                    >
                                        <i className={`fa-brands ${item.icon}`} />
                                    </a>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-review-btn"
                                    >
                                        {item.label}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-widgets-wrapper">
                <div className="shape-1">
                    <img src="/img/footer-shape-1.png" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".3"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        <img src={SITE_LOGO_SRC} alt="Padron Elétrica" className="site-logo site-logo-footer" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Padron - Elétrica predial, comercial, automação, CFTV, porteiro eletrônico, aumento de carga e padrão LIGHT.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Links</h3>
                                </div>
                                <ul className="list-area">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Serviços</h3>
                                </div>
                                <ul className="list-area">
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <Link to={service.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* BOTÃO DE VOLTAR AO TOPO FIXADO MANTIDO */}
            <button 
                onClick={scrollToTop} 
                className="scroll-icon"
                aria-label="Voltar ao topo"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#facc15', // Amarelo
                    color: '#000',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 9999,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s, background-color 0.2s'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#eab308';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#facc15';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                <i className="fa fa-arrow-up" style={{ fontSize: '18px' }} />
            </button>
        </footer>
    );
};

export default Footer;