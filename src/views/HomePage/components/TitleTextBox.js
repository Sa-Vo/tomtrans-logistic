import React from 'react';
import * as palette from '../../../utils/VariablesStyled';
import styled from 'styled-components';

const Box = styled.article`
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    max-width: 55rem;
    padding: 0 1rem;

    @media ${palette.device.tablet} {
        top: 45%;
        left: 42%;
    }
    @media ${palette.device.laptop} {
        top: 45%;
        left: 28%;
    }

    @media ${palette.device.laptopL} {
        left: 27%;
    }

    h1 {
        font-size: 4rem;
        background-color: rgba(0, 0, 0, 0.4);

        @media ${palette.device.mobileM} {
            width: 32rem;
        }
        @media ${palette.device.mobileM} {
            width: 32rem;
        }
    }

    p {
        margin: 1rem 0;
        font-size: 2rem;
        background-color: rgba(0, 0, 0, 0.4);
    }

    @media ${palette.device.tablet} {
        width: 45rem;
        h1 {
            font-size: 5rem;
        }

        p {
            font-size: 3rem;
        }
    }
`;

const TitleTextBox = () => (
    <Box>
        <h1>
            Міжнародні <br /> перевезення
        </h1>
        <p>Потрібно шось кудись перевезти?</p>
        <p>Подайте швидку заявку і ми допоможем вам</p>
    </Box>
);

export default TitleTextBox;
