import React from 'react';
import { HomeSlide } from './HomeStyled';
import Modal from '../../components/Modal/Modal';
import Section from '../../components/Section/Section';
import SectionLong from '../../components/Section/SectionLong';
import CarPark from './components/CarPark/CarPark';
import Slider from './components/Slider/Slider';
import Service from './components/Service/Service';
import SliderPartners from './components/SliderPartners';

import serviceData from './components/Service/ServiceData';

const Home = () => (
    <>
        <HomeSlide>
            <Modal />
        </HomeSlide>
        <Section>
            <h2>Наш автопарк</h2>
            <CarPark />
            <Slider />
        </Section>
        <SectionLong>
            <h2>Послуги</h2>
            <Service serviceData={serviceData} />
        </SectionLong>
        <Section>
            <SliderPartners />
        </Section>
    </>
);

export default Home;
