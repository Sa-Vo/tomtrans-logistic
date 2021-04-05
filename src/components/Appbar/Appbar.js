import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import { Wrapper } from '../../utils/VariablesStyled';
import { useDocumentScrollThrottled } from '../../utils/UseDocScrollThrottled';
import './Header.css';

// const Header = styled.header`
    // position: fixed;
    // height: 20vh;
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
    // z-index: 2;

    // @media (min-width: 769px) {
    //     position: absolute;
    // }
// `;

const HeaderBox = styled.div`
    ${Wrapper}
`;

const Appbar = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <header className={`header ${shadowStyle} ${hiddenStyle}`}>
            <HeaderBox>
                <Navigation />
            </HeaderBox>
        </header>
    );
};

export default Appbar;
