import styled from 'styled-components';
import * as palette from '../../../utils/VariablesStyled';

export const TeamSection = styled.section`
    h2 {
        text-align: center;
        padding: 2rem 0;
        @media ${palette.device.mobileS} {
            font-size: 3rem;
            padding: 1rem 0;
        }
        @media ${palette.device.tablet} {
            font-size: 5rem;
        }
    }
    padding-top: 2rem;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
`;

export const TeamList = styled.ul`
    max-width: 100%;
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 3rem;
    list-style: none;
    justify-content: center;

    // Cards span 2 columns so incomplete rows can be offset by one column and centered
    @media (min-width: 600px) {
        grid-template-columns: repeat(4, minmax(0, 150px));
        column-gap: 1.5rem;

        & > li {
            grid-column: span 2;
        }
        & > li:last-child:nth-child(odd) {
            grid-column: 2 / span 2;
        }
    }

    // 4 cards in the first row, 3 centered in the second
    @media (min-width: 900px) {
        grid-template-columns: repeat(8, minmax(0, 150px));

        & > li:last-child:nth-child(odd) {
            grid-column: auto / span 2;
        }
        & > li:nth-child(5) {
            grid-column: 2 / span 2;
        }
    }
    @media (${palette.device.mobileS}) {
        padding: 0 1rem;
    }
`;

export const TeamMember = styled.li`
    display: grid;
    p {
        padding-top: 0.5rem;
        color: grey;
        font-size: 18px;
    }
    h1 {
        padding-top: 2rem;
    }
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    width: 100%;
    max-width: 300px;
    margin: auto;
    img {
        width: 100%;
    }
    text-align: center;
    font-family: arial;
    padding-bottom: 2rem;

    // max-width: 70rem;
    // margin: 0 auto 2rem;
    // &:last-child {
    //     margin: 0 auto;
    // }
    // @media ${palette.device.mobileS} {
    //     min-width: 30rem;
    // }
`;
