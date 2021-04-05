import React from 'react';
import { HomePage, HomeSlide } from './HomeStyled';
import TitleTextBox from './components/TitleTextBox';
import Modal from '../../components/Modal/Modal';
import WrapperBox from '../../components/Section/Wrapper';
import { Section } from '../../components/Section/Section';
import SectionLong from '../../components/Section/SectionLong';
import CarPark from './components/CarPark/CarPark';
import Slider from './components/Slider/Slider';
import Service from './components/Service/Service';
import SliderPartners from './components/SliderPartners';
import Location from './components/Location/Location';

import serviceData from './components/Service/ServiceData';
import carParkData from './Data/CarParkData';

const Home = () => (
    <HomePage>
        <HomeSlide>
            <TitleTextBox />
            <Modal />
        </HomeSlide>
        <WrapperBox>
            <h2>Наш автопарк</h2>
            <CarPark carParkData={carParkData} />
            <Slider />
        </WrapperBox>
        <SectionLong>
            <h2>Послуги</h2>
            <Service serviceData={serviceData} />
        </SectionLong>
        <WrapperBox>
            <CarPark carParkData={carParkData} />
        </WrapperBox>
        <SectionLong>
            <h2>Наші партнери</h2>
            <SliderPartners />
        </SectionLong>
        <Section>
            <h2>Де нас знайти</h2>
            <Location />
        </Section>
    </HomePage>
);

export default Home;
