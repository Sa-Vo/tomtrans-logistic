import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
    height: auto;
    padding: 0 20px;
`;

const Navigation = () => {
    return (
        <Nav>
            <Burger />
        </Nav>
    );
};

export default Navigation;
