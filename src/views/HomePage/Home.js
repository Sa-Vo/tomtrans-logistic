import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { HomePage, HomeSlide } from './HomeStyled';
import TitleTextBox from './components/TitleTextBox';
import Modal from '../../components/Modal/Modal';
import WrapperBox from '../../components/Section/Wrapper';
import { Section, SectionLong } from '../../components/Section/Section';
import CarPark from './components/CarPark/CarPark';
import Slider from './components/Slider/Slider';
import Service from './components/Service/Service';
import SliderPartners from './components/SliderPartners';
import Gallery from './components/Gallery/Gallery';
import Location from './components/Location/Location';
import DemoVideo from '../../assets/demo-video.mp4';
import VideoPreview from '../../assets/video-preview.jpg';
import Slide1 from '../../assets/gallery/slider-1.jpg';
import Slide2 from '../../assets/gallery/slider-2.jpg';
import Slide3 from '../../assets/gallery/slider-3.jpg';
import Slide4 from '../../assets/gallery/slider-4.jpg';
import Slide5 from '../../assets/gallery/slider-5.jpg';
import Slide6 from '../../assets/gallery/slider-6.jpg';

const data = [
    {
        img: Slide6,
    },
    {
        img: Slide1,
    },
    {
        img: Slide2,
    },
    {
        img: Slide3,
    },
    {
        img: Slide4,
    },
    {
        img: Slide5,
    },
];

const VideoWrapp = styled.video`
    position: absolute;
    top: 49%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    z-index: 0;
`;

const LoadingImageVideo = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
`;

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoadedMetadata = () => {
        setIsLoaded(true);
    };

    return (
        <>
            <Helmet>
                <title>Tomtrans Logistic</title>
            </Helmet>

            <HomePage>
                <HomeSlide>
                    <TitleTextBox />
                    <Modal />
                    {!isLoaded && (
                        <LoadingImageVideo
                            src={VideoPreview}
                            alt="Loading"
                            className="loading-image"
                        />
                    )}

                    <VideoWrapp
                        onLoadedMetadata={handleLoadedMetadata}
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%' }}
                    >
                        <source src={DemoVideo} type="video/mp4" />
                        Ваш браузер не підтримує відео тег.
                    </VideoWrapp>
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
                <SectionLong>
                    <Gallery data={data} />
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
