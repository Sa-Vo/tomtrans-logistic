import React from 'react';
// import styled from 'styled-components';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';

// const Wrapper = styled.div`
// width: 130rem;
// max-width: 130rem;
// margin: 0 auto;
// `;

const Layout = ({ children }) => (
    <div>
        <Appbar />
        {children}
        <Footer />
    </div>
);

export default Layout;
