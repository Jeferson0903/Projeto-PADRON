import { Link } from "react-router-dom"
import { SITE_LOGO_SRC } from "@/constants/siteLogo"
import TopHeaderOne from "./topHeaderOne"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"

const HeaderTwo = () => {
    const [isSticky] = useSticky()
    return (
        <header className="header-section-2">
            <TopHeaderOne className="top-style-2" wrapperClass="style-2" />
            <div id="header-sticky" className={`header-2 ${isSticky ? 'sticky' : ''}`}>
                <div className="main-logo">
                    <Link to="/">
                        <img src={SITE_LOGO_SRC} alt="Padron - Elétrica, Automação, CFTV" className="site-logo" />
                    </Link>
                </div>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo d-none">
                                <Link to="/" className="header-logo">
                                    <img src={SITE_LOGO_SRC} alt="Padron Elétrica" className="site-logo" />
                                </Link>
                            </div>
                            <div className="header-left">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <SearchPopup />
                                <div className="header-button">
                                    <Link to="/#contact" className="theme-btn">
                                        <span>
                                            Solicitar orçamento
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-lg-none my-auto">
                                    <ExtraInfoOffcanvas />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderTwo