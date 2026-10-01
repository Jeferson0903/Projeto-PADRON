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
                            <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
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
                            
                            {/* Menu de navegação limpo */}
                            <MobileMenuList onMenuClick={toggleOffcanvas} />
                            
                            <div className="mt-5 text-center">
                                <Link to="/contact" onClick={toggleOffcanvas} className="theme-btn w-100 text-center">
                                    <span>Solicitar Orçamento <i className="fa-solid fa-arrow-right-long ms-2" /></span>
                                </Link>
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