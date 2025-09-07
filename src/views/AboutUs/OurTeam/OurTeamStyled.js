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
    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
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
    max-width: 300px;
    margin: auto;
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
