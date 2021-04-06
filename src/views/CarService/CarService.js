import React from 'react';
import { Section, SectionLong } from '../../components/Section/Section';
import Wrapper from '../../components/Section/Wrapper';
import { CarServPage, CarServSlide } from './CarServiceStyled';
import Work from './components/Work/Work';
import ServiceServices from './components/ServiceServices/ServiceServices';
import Location from '../HomePage/components/Location/Location';

import serviceData from './Data/ServiceData';
import workData from './Data/WorkData';

const CarService = () => (
    <CarServPage>
        <CarServSlide>
            <h2>HELOOOO</h2>
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

        <Section darkTheme>
            <Location title={'Де нас знайти'} />
        </Section>
    </CarServPage>
);

export default CarService;
