import React from 'react';
import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';

const SectionBox = styled.section`
    padding-top: 4rem;
    width: 100%;
    margin-top: 6rem;
    background-color: white;
    box-shadow: ${palette.shadow};

    h2 {
        font-size: ${palette.H_2};
        text-align: center;
    }
`;

const SectionLong = ({ children }) => <SectionBox>{children}</SectionBox>;

export default SectionLong;
