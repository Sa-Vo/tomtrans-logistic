import styled from 'styled-components';
import { Wrapper } from '../../utils/VariablesStyled';
import * as palette from '../../utils/VariablesStyled';

export const Section = styled.section`
    ${Wrapper}
    padding-top: 1rem;
    margin: 0 2rem 4rem 2rem;
    border-radius: 3rem;
    box-shadow: ${palette.shadow};
    background: ${props =>
        props.darkTheme ? `${palette.darkThemeBg}` : `${palette.white}`};
    color: ${props => (props.darkTheme ? 'white' : 'black')};
    /* height: 100vh; */
    @media ${palette.device.laptopL} {
        margin: 0 auto 2rem;
    }

    h2 {
        font-size: 3rem;
        text-align: center;
        @media ${palette.device.tablet} {
            font-size: ${palette.H_2};
        }
    }
`;

// const Section = ({ children }) => <SectionBox>{children}</SectionBox>;

// export default Section;
