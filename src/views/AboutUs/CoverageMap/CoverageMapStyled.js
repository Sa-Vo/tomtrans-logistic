import styled from 'styled-components';
import * as palette from '../../../utils/VariablesStyled';

export const MapSection = styled.section`
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
    padding: 3rem;
    width: 150rem;
`;
