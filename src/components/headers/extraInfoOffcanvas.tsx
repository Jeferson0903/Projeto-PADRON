import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenuList from './mobileNavBar';

const ExtraInfoOffcanvas = () => {
    const [isInfoOpen, setInfoOpen] = useState(false);

    const toggleOffcanvas = () => {
        setInfoOpen(!isInfoOpen);
    };

    return (
        <>
            <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                <i className="fas fa-bars" />
            </div>
            <div className="fix-area">
                <div className={`offcanvas__info ${isInfoOpen ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link to="/">
                                        <img src="https://ydjnshjgpsyzvaxwgoca.supabase.co/storage/v1/object/sign/Padron%20Prejeto/Capa_Orcamento_1_paint.jpg-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2Y5YzQ2Yy04NDY3LTQxMTgtOGZhNC1kYWE0ODU1NmEwY2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQYWRyb24gUHJlamV0by9DYXBhX09yY2FtZW50b18xX3BhaW50LmpwZy1yZW1vdmViZy1wcmV2aWV3LnBuZyIsImlhdCI6MTc3MTA3NTA4MywiZXhwIjoxODM0MTQ3MDgzfQ.tfjHqj1vBiDBmj-c7zGMHMiRb_HgD7Hzuka14wThbXM" alt="Padron" className="site-logo" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={toggleOffcanvas}>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <MobileMenuList/>
                            <p className="text d-none d-lg-block">
                                Soluções em elétrica e automação com qualidade e segurança. Entre em contato para orçamentos e projetos sob medida.
                            </p>
                            <div className="mobile-menu fix mb-3" />
                            <div className="offcanvas__contact">
                                <h4>Informações de Contato</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="https://www.google.com/maps/search/?api=1&query=R.+Miguel+Lima+55+fundos+Aboli%C3%A7%C3%A3o+Rio+de+Janeiro+RJ+20755-050" target="_blank" rel="noopener noreferrer">R. Miguel Lima, 55 fundos - Abolição, Rio de Janeiro - RJ, 20755-050</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="mailto:padron.eletrica@gmail.com">padron.eletrica@gmail.com</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="#">Seg-Sex, 09h às 17h</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="https://api.whatsapp.com/send?phone=5521964937618&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Padron%20el%C3%A9trica" target="_blank" rel="noopener noreferrer">+55 21 96493-7618</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link to="/contact" className="theme-btn text-center">
                                        <span>Solicitar Orçamento<i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link to="#"><i className="fa-brands fa-x-twitter" /></Link>
                                    <Link to="#"><i className="fab fa-youtube" /></Link>
                                    <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isInfoOpen ? 'overlay-open' : ''}`} onClick={toggleOffcanvas} />
        </>
    );
};

export default ExtraInfoOffcanvas;