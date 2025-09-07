import styled from 'styled-components';
import * as palette from '../../../utils/VariablesStyled';

export const MapSection = styled.section`
    @media ${palette.device.mobileS} {
        font-size: 2rem;
        text-align: center;
    }
    font-size: 3rem;

    margin-top: 5rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${palette.shadow};
    background-color: white;
`;
export const MapBox = styled.section`
    @media ${palette.device.mobileS} {
        width: 85vw;
    }
    padding: 3rem;
    width: 150rem;
`;
