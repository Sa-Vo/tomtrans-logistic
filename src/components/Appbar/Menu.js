import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import routes from '../../routes';

import {
    Burger,
    BurgerClose,
    NavMenu,
    NavTop,
    NavItem,
    NavItemBox,
    NavContactBox,
    NavContactBoxItem,
    LogoBox,
    activeStyle,
} from './MenuStyled';
import imgLogoPath from '../../assets/Logo.png';

const RightNav = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const { t, i18n } = useTranslation();
    const changeLanguage = language => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <Burger onClick={showSidebar}>
                <FaIcons.FaBars />
            </Burger>

            <NavMenu className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <BurgerClose onClick={showSidebar}>
                    <AiIcons.AiOutlineClose />
                </BurgerClose>
                <NavTop>
                    <LogoBox>
                        <Link to="/">
                            <img src={imgLogoPath} alt="logo" />
                        </Link>
                    </LogoBox>

                    <NavContactBox>
                        <NavContactBoxItem>
                            <p>E-mail</p>
                            <p>tomtranslogistic@ukr.net</p>
                        </NavContactBoxItem>
                        <NavContactBoxItem>
                            <p>Телефон</p>
                            <p>+380(99)973-68-23</p>
                        </NavContactBoxItem>
                    </NavContactBox>

                    <select name="format" id="format">
                        {/* <option selected disabled>
                            Choose a book format
                        </option> */}
                        <option selected value="pdf">
                            <div></div>
                        </option>
                        <option
                            value="txt"
                            onClick={() => changeLanguage('ua')}
                        >
                            UA
                        </option>
                        <option value="epub">ePub</option>
                        <option value="fb2">fb2</option>
                        <option value="mobi">mobi</option>
                    </select>

                    {/* <div>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                        <button onClick={() => changeLanguage('ua')}>UA</button>
                    </div> */}
                </NavTop>
                <NavItemBox onClick={showSidebar}>
                    <NavItem>
                        <NavLink
                            to={routes.home}
                            exact
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            {t('link.home')}
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.tirParking}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            {t('link.aboutUs')}
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.carService}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            {t('link.carService')}
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.hostel}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            {t('link.hostel')}
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.aboutUs}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            {t('link.tirParking')}
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.contacts}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            {t('link.contact')}
                        </NavLink>
                    </NavItem>
                </NavItemBox>
            </NavMenu>
        </>
    );
};

export default RightNav;
