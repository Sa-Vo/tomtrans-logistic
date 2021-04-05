import React from 'react';
import { Wrapper, H_2 } from '../../../utils/VariablesStyled';
import styled from 'styled-components';

const Box = styled.article`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 0 2rem;
    ${Wrapper}

    h2 {
        font-size: ${H_2};
        color: white;
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 1rem;
        color: white;
        background-color: rgba(78, 76, 76, 0.5);

        &:last-child {
            margin: 0;
        }
    }
`;

const TitleTextBox = () => (
    <Box>
        <h2>
            Міжнародні <br /> перевезення
        </h2>
        <p>Потрібно шось кудись перевезти?</p>
        <p>Подайте швидку заявку і ми допоможем вам</p>
    </Box>
);

export default TitleTextBox;
