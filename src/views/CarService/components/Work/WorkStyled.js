import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const WorkBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 7rem 0 7rem 30rem;
`;
export const WorkInfo = styled.article`
    max-width: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
        font-size: 4rem;
        text-align: left;
    }
`;

export const SubText = styled.div`
    p {
        margin-bottom: 2rem;
        font-size: 2.5rem;

        &:last-child {
            margin: 0;
        }
    }
`;

export const StepsBox = styled.ul`
    padding: 0;
    list-style: none;
    width: 65%;
`;

export const StepItem = styled.li`
    font-weight: 500;
    display: flex;
    align-items: center;
    /* width: 70rem; */
    padding-left: 2rem;
    background-color: #202020;
    margin-bottom: 2rem;
    border: 1px solid white;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    width: 22rem;
    padding-right: 5rem;
`;

export const StepCount = styled.p`
    font-size: 6rem;
    padding: 1rem 0;
    color: ${palette.green};
`;

export const StepTitle = styled.h3`
    font-size: 2.5rem;
    padding-left: 2rem;
`;

export const Line = styled.div`
    display: inline-block;
    position: relative;
`;

export const StepInfo = styled.p`
    width: 40rem;
    font-size: 2rem;

    &::before {
        content: '';
        width: 2px;
        height: 8rem;
        background: gray;
        position: absolute;
        margin-left: -3rem;
        bottom: -33%;
    }
`;
