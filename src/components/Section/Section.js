import styled from 'styled-components';
import { Wrapper } from '../../utils/VariablesStyled';
import * as palette from '../../utils/VariablesStyled';

export const Section = styled.section`
    ${Wrapper}
    padding-top: 1rem;
    margin: 0 2rem;
    border-radius: 3rem;
    box-shadow: ${palette.shadow};
    background: ${props =>
        props.darkTheme ? `${palette.darkThemeBgL}` : `${palette.white}`};
    color: ${props => (props.darkTheme ? 'white' : 'black')};
    @media ${palette.device.laptopL} {
        margin: 0 auto;
    }

    h2 {
        font-size: ${palette.H_2};
        text-align: center;
    }
`;

export const SectionLong = styled.section`
    padding-top: 4rem;
    background: ${props =>
        props.darkTheme ? `${palette.darkThemeBg}` : `${palette.white}`};
    color: ${props => (props.darkTheme ? 'white' : 'black')};
    box-shadow: ${palette.shadow};
    margin: 0 2rem 4rem 2rem;
    border-radius: 3rem;

    @media ${palette.device.laptop} {
        margin: 0 0 6rem 0;
        border-radius: 0;
    }

    h2 {
        font-size: ${palette.H_2};
        text-align: center;
    }
`;

export const FormBox = styled.section`
    max-width: 130rem;
    margin: 0 2rem 4rem 2rem;


    @media ${palette.device.laptopL} {
        margin: 0 auto;
    }
`;
