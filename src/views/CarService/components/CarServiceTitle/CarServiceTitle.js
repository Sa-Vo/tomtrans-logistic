import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import * as palette from '../../../../utils/VariablesStyled';

export const TitleWrapp = styled.div`
    color: white;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    max-width: 55rem;
    @media ${palette.device.tablet} {
        top: 45%;
        left: 42%;
    }
    @media ${palette.device.laptop} {
        top: 45%;
        left: 28%;
    }
`;

const TitleBox = styled.article`
    padding: 0 1rem;
    h1 {
        font-size: 4rem;
    }

    p {
        padding: 1rem 0;
        font-size: 2rem;
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

const SubTitleBox = styled.article`
    padding-top: 2rem;
    p {
        font-size: 2rem;
    }

    @media ${palette.device.tablet} {
        p {
            font-size: 3rem;
        }
    }

    div {
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
        span {
            width: 3rem;
            svg {
                font-size: 2rem;
                color: ${palette.green};
            }
        }
    }
`;

export const Title = () => (
    <TitleBox>
        <h1>Ремонт вашого автомобіля</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam.
        </p>
    </TitleBox>
);

export const SubTitle = () => (
    <SubTitleBox>
        <div>
            <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>

            <p>м. Чернівці, вул. Чернівецька 12</p>
        </div>
        <div>
            <span>
                <FontAwesomeIcon icon={faClock} />
            </span>

            <p>Понеділок - Субота з 9:00 до 22:00</p>
        </div>
    </SubTitleBox>
);
