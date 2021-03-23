import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';

export const BoxInfoCar = styled.ul`
    list-style:none;
    display: flex;
    justify-content: space-between;
    margin: 100px 0;
`;

export const BoxInfoCarItem = styled.li`
    display: flex;
    align-items: center;
`;

export const Circle = styled.div`
    height: 15rem;
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
    box-shadow: 4.31px 5.516px 5.74px rgba(0, 0, 0, 0.18);
`;

export const BoxDescrCar = styled.div`
    margin-left: -15px;
    
    p {
        font-size: 30px;
    }

    span {
        font-weight: 400;
        font-size: 20px;
        color: rgba(0,0,0,0.7);
    }
`;
