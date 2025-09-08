import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';

export const HostelPage = styled.main`
    @media ${palette.device.laptop} {
        height: 1200px;
    }
    @media ${palette.device.mobileS} {
        height: 950px;
    }
     {
        background-color: rgb(53, 53, 53);
    }
   
`;
