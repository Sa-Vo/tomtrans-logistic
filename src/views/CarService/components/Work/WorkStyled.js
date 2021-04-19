import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const WorkBox = styled.div`
    display: block;
    padding: 0 2rem 4rem 2rem;

    @media ${palette.device.laptopL} {
        display: flex;
        justify-content: space-between;
        padding: 7rem 0 7rem 30rem;
    }
`;
export const WorkInfo = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media ${palette.device.laptopL} {
        max-width: 45rem;
        margin-right: 3rem;
    }

    h2 {
        font-size: 4rem;
        text-align: left;
    }

    a {
        width: 27rem;
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

export const ButtonForm = styled.button`
    ${palette.ButtonFormDefault}
    ${palette.Button}
    margin-top: 4rem;
    width: 26rem;
    height: 62px;
    background-color: rgba(255, 255, 255, 0);
    @media ${palette.device.laptopL} {
        margin: 0;
    }
`;

export const StepsBox = styled.ul`
    padding: 0;
    list-style: none;
    width: 100%;
    @media ${palette.device.laptopL} {
        width: 65%;
    }
`;

export const StepItem = styled.li`
    font-weight: 500;
    display: block;
    background-color: #202020;
    margin-bottom: 2rem;
    border: 1px solid white;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    @media ${palette.device.tablet} {
        display: flex;
        align-items: center;
        padding-left: 2rem;
    }

    @media ${palette.device.laptopL} {
        border-right: none;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media ${palette.device.tablet} {
        justify-content: start;
        width: 22rem;
        padding-right: 5rem;
    }
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
    font-size: 2rem;
    padding: 0 2rem;

    @media ${palette.device.tablet} {
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
    }
`;
