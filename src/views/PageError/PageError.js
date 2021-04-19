import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../../components/Section/Wrapper';
import Truck from '../../assets/404-Truck.png';

const Main = styled.main`
    height: 100vh;
    background-color: #2d2d2d;
    position: relative;
    z-index: 99; // сховав header

    section {
        text-align: center;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        color: white;
        text-transform: uppercase;
        padding: 0 2rem;
    }
    h1 {
        font-size: 5rem;
        font-style: italic;
    }

    img {
        padding: 4rem 0 5rem 0;
    }
    h2 {
        font-style: 5rem;
        font-weight: 400;

        a {
            text-decoration: none;
            color: #277a35;
        }
    }
`;

const PageError = () => (
    <Main>
        <Wrapper>
            <h1>упс... щось пішло не так</h1>
            <img src={Truck} alt="Truck" />

            <h2>
                Поверніться на <Link to="/">головну сторінку</Link>
            </h2>
        </Wrapper>
    </Main>
);

export default PageError;
