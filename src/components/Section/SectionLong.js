import React from 'react';
import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';

const SectionBox = styled.section`
    padding-top: 4rem;

    background-color: white;
    box-shadow: ${palette.shadow};
    margin: 0 2rem 4rem 2rem;
    border-radius: 3rem;

    @media ${palette.device.laptop} {
        margin: 0 0 6rem 0;
        border-radius: 0;
    }

    /* &:nth-child(3) {
        
    } */

    h2 {
        font-size: ${palette.H_2};
        text-align: center;
    }
`;

const SectionLong = ({ children }) => <SectionBox>{children}</SectionBox>;

export default SectionLong;
