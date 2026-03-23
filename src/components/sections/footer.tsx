import { Link } from "react-router-dom";

const quickLinks = [
    { text: "Sobre", link: "/#about" },
    { text: "Serviços", link: "/#services" },
    { text: "Blog", link: "/#blog" },
    { text: "FAQ", link: "/#faq" },
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
    {
        icon: "fa-brands fa-google",
        label: "AVALIE AQUI",
        link: "https://www.google.com/search?q=padron+-+el%C3%A9trica+predial+-+comercial+.+automa%C3%A7%C3%A2o+.+cftv+-+porteiro+eletr%C3%B4nico+.+aumento+de+carga+-+padr%C3%A3o+light.&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIPCAAQIxgnGOoCGIAEGIoFMgkIARAjGCcY6gIyDwgCECMYJxjqAhiABBiKBTIPCAMQIxgnGOoCGIAEGIoFMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIPCAYQIxgnGOoCGIAEGIoFMg8IBxAjGCcY6gIYgAQYigXSAQkxODA3ajBqMTWoAgiwAgHxBSsPYtMYnzME8QUrD2LTGJ8zBA&sourceid=chrome&ie=UTF-8#lpg=cid:CgIgAQ%3D%3D,ik:CAoSK0FGMVFpcFA5NnNrNldZdGN5RExMNU1PWV83djRMdXdHYUpvOUx6eGNZVEU",
    },
];

const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
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
                    <img src="/img/footer-shape-1.png" alt="shape-img" />
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
                                        <img src="https://ydjnshjgpsyzvaxwgoca.supabase.co/storage/v1/object/sign/Padron%20Prejeto/Capa_Orcamento_1_paint.jpg-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2Y5YzQ2Yy04NDY3LTQxMTgtOGZhNC1kYWE0ODU1NmEwY2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQYWRyb24gUHJlamV0by9DYXBhX09yY2FtZW50b18xX3BhaW50LmpwZy1yZW1vdmViZy1wcmV2aWV3LnBuZyIsImlhdCI6MTc3MTA3NTA4MywiZXhwIjoxODM0MTQ3MDgzfQ.tfjHqj1vBiDBmj-c7zGMHMiRb_HgD7Hzuka14wThbXM" alt="Padron" className="site-logo site-logo-footer" />
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
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © {new Date().getFullYear()} Padron - Elétrica, Automação e CFTV
                        </p>
                        <ul className="footer-menu wow slideRight" data-delay=".5">
                            <li>
                                <Link to="/#contact">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
