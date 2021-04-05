import React from 'react';
import { Wrapper, H_2 } from '../../../utils/VariablesStyled';
import styled from 'styled-components';

const Box = styled.article`
    position: absolute;
    top: 30%;
    padding: 0 2rem;
    ${Wrapper}

    h2 {
        font-size: ${H_2};
        color: white;
        margin-bottom: 2rem;
    }

    p {
        color: white;
        background-color: rgba(78, 76, 76, 0.5);
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
