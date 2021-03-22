import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import {
    NavMenu,
    NavTop,
    NavItem,
    NavItemBox,
    NavContactBox,
    LogoBox,
    activeStyle,
} from './MenuStyled';
import imgLogoPath from '../../assets/Logo.png';

const RightNav = ({ open }) => {
    return (
        <>
            <NavMenu open={open}>
                <NavTop>
                    <LogoBox>
                        <img src={imgLogoPath} alt="logo" />
                    </LogoBox>

                    <NavContactBox>
                        <div>
                            <p>E-mail</p>
                            <p>mango@gmail.com</p>
                        </div>
                        <div>
                            <p>Телефон</p>
                            <p>0677774327</p>
                        </div>
                    </NavContactBox>
                </NavTop>
                <NavItemBox>
                    <NavItem>
                        <NavLink
                            to={routes.home}
                            exact
                            activeStyle={{ color: `${activeStyle}`}}
                        >
                            Головна
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
