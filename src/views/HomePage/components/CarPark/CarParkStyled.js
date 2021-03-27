import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const BoxInfoCar = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: block;

    @media ${palette.device.tablet} {
        display: flex;
        justify-content: space-between;
        margin: 100px 0;
    }
`;

export const BoxInfoCarItem = styled.li`
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 3rem;
`;

export const Circle = styled.div`
    height: 12rem;
    width: 12rem;
    display: table-cell;
    font-size: 4rem;
    font-style: italic;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    font-weight: bold;
    background: white;
    color: rgb(64, 179, 70);
    text-shadow: 4.31px 5.516px 5.74px rgba(0, 0, 0, 0.18);
    box-shadow: 4.31px 5.516px 5.74px rgba(0, 0, 0, 0.18);
    @media ${palette.device.laptop} {
        font-size: 5rem;
        height: 15rem;
        width: 15rem;
    }
    /* height: 15rem;
    width: 15rem;
    display: table-cell;
    font-size: 50px;
    font-style: italic;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    font-weight: bold;
    background: white;
    color: rgb(64, 179, 70);
    text-shadow: 4.31px 5.516px 5.74px rgba(0, 0, 0, 0.18);
    box-shadow: 4.31px 5.516px 5.74px rgba(0, 0, 0, 0.18); */
`;

export const BoxDescrCar = styled.div`
    margin-left: -15px;

    p {
        font-size: 3rem;
    }

    span {
        font-weight: 400;
        font-size: 1.5rem;
        color: rgba(0, 0, 0, 0.7);
        @media ${palette.device.laptop} {
            font-size: 2rem;
        }
    }
`;
