import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import {
    Section,
    SectionLong,
    FormBox,
} from '../../components/Section/Section';
import Wrapper from '../../components/Section/Wrapper';
import { CarServPage, CarServSlide } from './CarServiceStyled';
import Work from './components/Work/Work';
import ServiceServices from './components/ServiceServices/ServiceServices';
import {
    TitleWrapp,
    Title,
    SubTitle,
} from './components/CarServiceTitle/CarServiceTitle';
import Modal from './components/ModalService/ModalService';
import Location from './components/Location/Location';
import FormService from './components/FormService/FormService';
import Gallery from '../HomePage/components/Gallery/Gallery';

import Slide1 from '../../assets/gallery/auto-slider-1.jpg';
import Slide2 from '../../assets/gallery/auto-slider-2.jpg';
const data = [
    {
        img: Slide2,
    },
    {
        img: Slide1,
    },
];

export default class CarService extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Car Service</title>
                </Helmet>

                <CarServPage>
                    <CarServSlide>
                        <TitleWrapp>
                            <Title />
                            <SubTitle />
                        </TitleWrapp>

                        <Modal />
                    </CarServSlide>

                    <SectionLong darkTheme>
                        <Work />
                    </SectionLong>

                    <Wrapper>
                        <ServiceServices />
                    </Wrapper>

                    <SectionLong darkTheme>
                        <Gallery data={data} />
                    </SectionLong>

                    <FormBox darkTheme>
                        <Element name="formProblem">
                            <FormService />
                        </Element>
                    </FormBox>

                    <Section darkTheme>
                        <Location />
                    </Section>
                </CarServPage>
            </>
        );
    }
}
