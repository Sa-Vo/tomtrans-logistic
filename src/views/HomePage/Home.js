import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { HomePage, HomeSlide } from './HomeStyled';
import TitleTextBox from './components/TitleTextBox';
import Modal from '../../components/Modal/Modal';
import WrapperBox from '../../components/Section/Wrapper';
import { Section, SectionLong } from '../../components/Section/Section';
import CarPark from './components/CarPark/CarPark';
import Slider from './components/Slider/Slider';
import Service from './components/Service/Service';
import SliderPartners from './components/SliderPartners';
import Location from './components/Location/Location';

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <Helmet>
                <title>Tomtrans Logistic</title>
            </Helmet>

            <HomePage>
                <HomeSlide>
                    <TitleTextBox />
                    <Modal />
                </HomeSlide>
                <WrapperBox>
                    <h2>{t('titleSection.carPark')}</h2>
                    <CarPark />
                    <Slider />
                </WrapperBox>
                <SectionLong>
                    <h2>{t('titleSection.service')}</h2>
                    <Service />
                </SectionLong>
                {/* <WrapperBox>
                    <CarPark carParkData={carParkData} />
                </WrapperBox> */}
                <SectionLong>
                    <h2>{t('titleSection.partners')}</h2>
                    <SliderPartners />
                </SectionLong>
                <Section>
                    <h2>{t('titleSection.location')}</h2>
                    <Location />
                </Section>
            </HomePage>
        </>
    );
};

export default Home;
