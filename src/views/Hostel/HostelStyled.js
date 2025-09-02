import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';

export const HostelPage = styled.main`
    @media ${palette.device.laptop} {
        height: 100vh;
    }

     {
        background-color: rgb(53, 53, 53);
    }
    section {

        @media ${palette.device.laptop} {
        }

        @media ${palette.device.laptopL} {
            padding: 0;
        }
    }
`;
