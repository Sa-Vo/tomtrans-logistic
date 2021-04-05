import React from 'react';
import { Section } from '../../components/Section/Section';
import SectionLong from '../../components/Section/SectionLong';
import Wrapper from '../../components/Section/Wrapper';
import { CarServPage, CarServSlide } from './CarServiceStyled';
import Location from '../HomePage/components/Location/Location';
import ServiceServices from './components/ServiceServices/ServiceServices';

import serviceData from './components/ServiceServices/ServiceData';

const CarService = () => (
    <CarServPage>
        <CarServSlide>
            <h2>HELOOOO</h2>
        </CarServSlide>

        <Wrapper>
            <ServiceServices
                title={'Послуги сервісу'}
                serviceData={serviceData}
            />
        </Wrapper>

        <hr/>

        <Section darkTheme>
            <Location title={'Де нас знайти'} />
        </Section>
    </CarServPage>
);

export default CarService;
