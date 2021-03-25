import React from 'react';
import { HomeSlide } from './HomeStyled';
import FromOrder from './components/FormOrder/FormOrder';
import Modal from '../../components/Modal/Modal';
import Section from '../../components/Section/Section';
import CarPark from './components/CarPark/CarPark';
import Slider from './components/Slider/Slider';

const Home = () => (
    <>
        <HomeSlide>
            <Modal />
            {/* <FromOrder /> */}
        </HomeSlide>
        <Section>
            <h2>Наш автопарк</h2>
            <CarPark />
            <Slider />
        </Section>
    </>
);

export default Home;
