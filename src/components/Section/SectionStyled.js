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
    &:nth-child(6) {
        padding-top: 1rem;
        margin: 0 auto 2rem;
        box-shadow: ${palette.shadow};
        background-color: white;
        height: 58rem;
        @media ${palette.device.tablet} {
            padding-top: 4rem;
            height: 54rem;
        }
        @media ${palette.device.laptop} {
            height: auto;
        }
        @media ${palette.device.laptopL} {
            height: 75rem;
        }
    }

    h2 {
        font-size: 3rem;
        text-align: center;
        @media ${palette.device.tablet} {
            font-size: ${palette.H_2};
        }
    }
`;
