import { MegaMenuDataType, menuData, MenuItemDataType, SubMenuDataType } from '@/db/menuData';
import { MouseEvent, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';

// 1. Recebemos a função onMenuClick (que fecha o menu) através das props
const MobileNavBar = ({ onMenuClick }: { onMenuClick?: () => void }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleSubmenu = (e: MouseEvent, index: number) => {
        e.preventDefault();
        e.stopPropagation(); // Impede que o clique no '+' ative o fecho do menu
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className='mobile-menu d-lg-none'>
            {menuData.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return <MenuItem key={index} item={item} index={index} toggleSubmenu={toggleSubmenu} isOpen={isOpen} onMenuClick={onMenuClick} />;
            })}
        </div>
    );
};

// 2. Adicionamos o onMenuClick a todos os Links principais
const MenuItem = ({ item, index, toggleSubmenu, isOpen, onMenuClick }: { item: MenuItemDataType; index: number; isOpen: boolean; toggleSubmenu: (e: MouseEvent, index: number) => void; onMenuClick?: () => void }) => {
    return (
        <div key={index} className='menu-item'>
            <Link to={item.link} onClick={onMenuClick}>
                {item.title}
                {(item.megamenu?.length || item.submenu?.length) && (
                    <i onClick={(e) => toggleSubmenu(e, index)}>+</i>
                )}
            </Link>
            {item.megamenu?.length && <MegaMenu megamenu={item.megamenu} isOpen={isOpen} index={index} onMenuClick={onMenuClick} />}
            {item.submenu?.length && <Submenu submenu={item.submenu} isOpen={isOpen} index={index} onMenuClick={onMenuClick} />}
        </div>
    );
};

// 3. Adicionamos o onMenuClick aos links do MegaMenu
const MegaMenu = ({ megamenu, isOpen, index, onMenuClick }: { megamenu: MegaMenuDataType[]; isOpen: boolean; index: number; onMenuClick?: () => void }) => (
    <AnimateHeight id={`submenu-${index}`} duration={300} height={isOpen ? 'auto' : 0}>
        <div className='mega-menu'>
            {megamenu.map(({ image, links, title }) => (
                <div className="homemenu" key={title}>
                    <div className="homemenu-thumb">
                        <img src={image} alt="img" />
                        <div className="demo-button">
                            {links.map(({ link, title }) => (
                                <Link key={link} to={link} className="theme-btn" onClick={onMenuClick}>
                                    <span>{title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">{title}</h4>
                    </div>
                </div>
            ))}
        </div>
    </AnimateHeight>
);

// 4. Adicionamos o onMenuClick aos links dos Submenus normais
const Submenu = ({ submenu, isOpen, index, onMenuClick }: { submenu: SubMenuDataType[]; isOpen: boolean; index: number; onMenuClick?: () => void }) => {
    const [openSubIndexes, setOpenSubIndexes] = useState<number[]>([]);

    const toggleNestedSubmenu = (e: MouseEvent, subIndex: number) => {
        e.preventDefault();
        e.stopPropagation(); // Impede que o clique no '+' ative o fecho do menu
        setOpenSubIndexes((prev) =>
            prev.includes(subIndex) ? prev.filter((i) => i !== subIndex) : [...prev, subIndex]
        );
    };

    return (
        <AnimateHeight id={`submenu-${index}`} duration={500} height={isOpen ? 'auto' : 0}>
            <div className='has-submenu'>
                {submenu.map((item, subIndex) => {
                    const nestedIsOpen = openSubIndexes.includes(subIndex);
                    return (
                        <div key={subIndex}>
                            <Link to={item.link} onClick={onMenuClick}>
                                {item.title}
                                {item.submenu?.length && (
                                    <i onClick={(e) => toggleNestedSubmenu(e, subIndex)}>+</i>
                                )}
                            </Link>
                            {item.submenu?.length && <Submenu submenu={item.submenu} isOpen={nestedIsOpen} index={subIndex} onMenuClick={onMenuClick} />}
                        </div>
                    );
                })}
            </div>
        </AnimateHeight>
    );
};

export default MobileNavBar;