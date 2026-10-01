import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_LOGO_SRC } from '@/constants/siteLogo';
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
                                    <Link to="/" onClick={toggleOffcanvas}>
                                        <img src={SITE_LOGO_SRC} alt="Padron Elétrica" className="site-logo" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={toggleOffcanvas}>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            
                            {/* AQUI PASSAMOS A FUNÇÃO DE FECHAR PARA DENTRO DO MENU */}
                            <MobileMenuList onMenuClick={toggleOffcanvas} />
                            
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
                                            <a href="https://www.google.com/maps/search/?api=1&query=R.+Miguel+Lima+55+Pilares+Rio+de+Janeiro+RJ+20755-050" target="_blank" rel="noopener noreferrer">R. Miguel Lima, 55 - Pilares, Rio de Janeiro - RJ, 20755-050</a>
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
                                    <Link to="/#contact" onClick={toggleOffcanvas} className="theme-btn text-center">
                                        <span>Solicitar Orçamento<i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
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