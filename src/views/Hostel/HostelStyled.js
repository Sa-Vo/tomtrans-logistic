import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';
import HostelBg from '../../assets/HostelBg.png';

export const HostelPage = styled.main`
    @media ${palette.device.laptop} {
        height: 100vh;
    }

    section {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${HostelBg});
        padding: 0 1rem;
        height: 125rem;

        @media ${palette.device.laptop} {
            height: 100vh;
        }

        @media ${palette.device.laptopL} {
            padding: 0;
        }
    }
`;
