import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import imgLogoPath from '../../assets/Logo.png';

const Nav = styled.nav`
    height: auto;
    padding: 0 20px;
`;
const NavLogoBox = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }

    img {
        padding-top: 10px;
        width: 70px;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <NavLogoBox>
                <img src={imgLogoPath} alt="Logo" />
            </NavLogoBox>
            <Burger />
        </Nav>
    );
};

export default Navigation;
