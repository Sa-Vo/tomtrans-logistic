import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import * as palette from '../../../../utils/VariablesStyled';

export const TitleWrapp = styled.div`
    color: white;
    position: absolute;
    top: 35%;
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

export const Title = () => {
    const { t } = useTranslation();
    console.log(t);
    return (
        <TitleBox>
            <h1>{t('titlePage.carService')}</h1>
            <p>{t('titlePage.subTitleCarService.descr')}</p>
        </TitleBox>
    );
};

export const SubTitle = () => {
    const { t } = useTranslation();

    return (
        <SubTitleBox>
            <div>
                <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>

                <p>{t('titlePage.subTitleCarService.location')}</p>
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faClock} />
                </span>

                <p>{t('titlePage.subTitleCarService.workTime')}</p>
            </div>
        </SubTitleBox>
    );
};
