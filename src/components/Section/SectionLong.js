import React from 'react';
import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';

const SectionBox = styled.section`
    padding-top: 4rem;
    /* width: 100%; */
    margin-top: 6rem;
    background-color: white;
    box-shadow: ${palette.shadow};

    &:nth-child(3) {
        margin: 0 2rem;
        border-radius: 3rem;
    }

    h2 {
        font-size: ${palette.H_2};
        text-align: center;
    }
`;

const SectionLong = ({ children }) => <SectionBox>{children}</SectionBox>;

export default SectionLong;
