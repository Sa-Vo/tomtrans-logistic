import React from 'react';
import { Element } from 'react-scroll';

import {
    Section,
    SectionLong,
    FormBox,
} from '../../components/Section/Section';
import Wrapper from '../../components/Section/Wrapper';
import { CarServPage, CarServSlide } from './CarServiceStyled';
import Work from './components/Work/Work';
import ServiceServices from './components/ServiceServices/ServiceServices';
import { TitleWrapp, Title, SubTitle } from './components/CarServiceTitle/CarServiceTitle';
import Modal from './components/ModalService/ModalService';
import Location from './components/Location/Location';
import FormService from './components/FormService/FormService';

import serviceData from './Data/ServiceData';
import workData from './Data/WorkData';

const CarService = () => (
    <CarServPage>
        <CarServSlide>
            <TitleWrapp>
                <Title />
                <SubTitle />
            </TitleWrapp>

            <Modal />
        </CarServSlide>

        <SectionLong darkTheme>
            <Work title={'Як ми працюєм'} workData={workData} />
        </SectionLong>

        <Wrapper>
            <ServiceServices
                title={'Послуги сервісу'}
                serviceData={serviceData}
            />
        </Wrapper>

        <FormBox darkTheme>
            <Element name="formProblem">
                <FormService />
            </Element>
        </FormBox>

        <Section darkTheme>
            <Location title={'Де нас знайти'} />
        </Section>
    </CarServPage>
);

export default CarService;
