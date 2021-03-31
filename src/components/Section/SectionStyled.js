import styled from 'styled-components';
import { Wrapper } from '../../utils/VariablesStyled';
import * as palette from '../../utils/VariablesStyled';

export const SectionBox = styled.section`
    ${Wrapper}
    border-radius: 3rem;
    margin-top: 6rem;
    /* height: 100vh; */

    &:nth-child(5) {
        box-shadow: ${palette.shadow};
        background-color: white;
    }

    h2 {
        font-size: ${palette.H_2};
        text-align: center;
    }
`;
