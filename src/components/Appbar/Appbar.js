import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Header = styled.header`
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
`;

const HeaderBox = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;

const Appbar = () => (
    <Header>
        <HeaderBox>
            <Navigation />
        </HeaderBox>
    </Header>
);

export default Appbar;
