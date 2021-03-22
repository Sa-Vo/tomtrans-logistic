import styled from 'styled-components';
import { Wrapper } from '../../utils/VariablesStyled';
import * as palette from '../../utils/VariablesStyled';

export const SectionBox = styled.section`
    ${Wrapper}
    margin-top: 60px;
    height: 100vh;

    h2 {
        font-size: ${palette.H_2};
        text-align: center;
    }
`;
