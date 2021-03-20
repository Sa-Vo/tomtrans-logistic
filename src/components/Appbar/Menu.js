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
                        <NavLink to={routes.home}>Головна</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.aboutUs}>Про нас</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.tirParking}>Tir Parking</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.carService}>Автосервіс</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.hostel}>Хостел</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.contacts}>Контакти</NavLink>
                    </NavItem>
                </NavItemBox>
            </NavMenu>
        </>
    );
};

export default RightNav;
