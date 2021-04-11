import styled from 'styled-components';
import { Wrapper } from '../../utils/VariablesStyled';
import * as palette from '../../utils/VariablesStyled';

const SectionBox = styled.section`
    ${Wrapper}

    h2 {
        font-size: 3rem;
        text-align: center;
        @media ${palette.device.tablet} {
            font-size: ${palette.H_2};
        }
    }
`;

const WrapperBox = ({ children }) => <SectionBox>{children}</SectionBox>;

export default WrapperBox;
