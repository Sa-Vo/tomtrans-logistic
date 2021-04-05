import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const Title = styled.h2`
    padding: 8rem 0;
    color: white;
`;

export const Services = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    max-width: 130rem;
`;
export const ServicesItem = styled.li`
    width: 32rem;
    height: 32rem;
    text-align: center;
    padding-top: 2rem;
    margin-right: 8rem;
    margin-bottom: 8rem;
    color: white;
    background-color: #373737;
    border-radius: 2rem;

    @media (min-width: 320px) and (max-width: 799px) {
        /* margin: 0 auto; */
    }

    @media (min-width: 800px) and (max-width: 1199px) {
        width: 35rem;
        height: 35rem;
        &:nth-child(even) {
            margin-right: 0;
        }

        &:nth-child(n + 5) {
            margin-bottom: 0;
        }
    }

    @media (min-width: 2000px) {
        &:nth-child(3n + 0) {
            margin-right: 0;
        }

        &:nth-child(n + 3) {
            margin-bottom: 0;
        }
    }

    div {
        width: 15rem;
        height: 15rem;
        background-color: green;
        border-radius: 50%;
        margin: 0 auto;

        img {
            margin: 0 auto;
            display: table-cell;
            vertical-align: middle;
            padding: 2rem 0;
            width: 65%;
        }
    }

    h3 {
        padding-top: 6rem;
        font-size: 3rem;
    }
`;
