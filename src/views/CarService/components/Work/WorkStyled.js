import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const WorkBox = styled.div`
    display: flex;
    padding-left: 30rem;
`;
export const WorkInfo = styled.article`
    max-width: 35rem;

    h2 {
        font-size: 3rem;
        text-align: left;
    }
`;

export const StepsBox = styled.ul`
    padding: 0;
    list-style: none;
`;

export const StepItem = styled.li`
    display: flex;
    background-color: #202020;
    margin-bottom: 2rem;
    border: 1px solid white;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
`;

export const StepCount = styled.div``;

export const StepTitle = styled.h3``;

export const StepInfo = styled.p``;
