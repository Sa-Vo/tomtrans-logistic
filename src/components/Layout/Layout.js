import React from 'react';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <Appbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
