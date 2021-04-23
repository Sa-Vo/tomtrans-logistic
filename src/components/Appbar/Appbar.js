import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import { Wrapper } from '../../utils/VariablesStyled';

const Header = styled.header`
    position: fixed;
    height: 13vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;

    @media (max-width: 768px) {
        background-color: rgba(255, 255, 255, 0.8);
    }

    @media (min-width: 769px) {
        position: absolute;
    }
`;

const HeaderBox = styled.div`
    ${Wrapper}
`;

const Appbar = () => (
    <Header>
        <HeaderBox>
            <Navigation />
        </HeaderBox>
    </Header>
);

export default Appbar;
