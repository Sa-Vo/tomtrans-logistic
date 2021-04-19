import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
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

// const removC = () => ()

const RightNav = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

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
                        <img src={imgLogoPath} alt="logo" />
                    </LogoBox>

                    <NavContactBox>
                        <NavContactBoxItem>
                            <p>E-mail</p>
                            <p>tomtranslogistic@ukr.net</p>
                        </NavContactBoxItem>
                        <NavContactBoxItem>
                            <p>Телефон</p>
                            <p>+380(99)9736823</p>
                        </NavContactBoxItem>
                    </NavContactBox>
                </NavTop>
                <NavItemBox onClick={showSidebar}>
                    <NavItem>
                        <NavLink
                            to={routes.home}
                            exact
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            Головна
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.tirParking}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            Tir Parking
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.carService}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            Автосервіс
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.hostel}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            Хостел
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.aboutUs}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            Про нас
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to={routes.contacts}
                            activeStyle={{ color: `${activeStyle}` }}
                        >
                            Контакти
                        </NavLink>
                    </NavItem>
                </NavItemBox>
            </NavMenu>
        </>
    );
};

export default RightNav;
