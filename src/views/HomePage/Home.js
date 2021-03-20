import React from 'react';
import { HomeSlide } from './HomeStyled';
import FromOrder from '../../components/FormOrder/FormOrder';

const Home = () => (
    <>
        <HomeSlide>
            <FromOrder />
        </HomeSlide>
        <h1>Main page</h1>
    </>
);

export default Home;
