import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import { Wrapper } from '../../utils/VariablesStyled';

const Header = styled.header`
    background-color: rgba(0, 0, 0, 0.4);
    height: fit-content;
    position: fixed;
    // height: 13vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;

    @media (max-width: 768px) {
        padding-block:1.5rem;
        background-color: rgba(5, 5, 5, 0.8);
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
