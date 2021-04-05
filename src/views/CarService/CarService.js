import React from 'react';
import { Section } from '../../components/Section/Section';
import SectionLong from '../../components/Section/SectionLong';
import { CarServPage, CarServSlide } from './CarServiceStyled';
import Location from '../HomePage/components/Location/Location';

const CarService = () => (
    <CarServPage>
        <CarServSlide>
            <h2>HELOOOO</h2>
        </CarServSlide>

        <Section darkTheme>
            <Location title={'Title CarS'} />
        </Section>
    </CarServPage>
);

export default CarService;
