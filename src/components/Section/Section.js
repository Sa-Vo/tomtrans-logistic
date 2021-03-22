import React from 'react';
import { SectionBox } from './SectionStyled';

const Section = ({ title, children }) => (
    <SectionBox>
        <h2>{title}</h2>
        {children}
    </SectionBox>
);

export default Section;
