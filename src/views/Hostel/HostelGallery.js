import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'antd';
import styled from 'styled-components';

const CarouselWrapp = styled.div`
    padding-top: 3rem;
    padding-bottom: 35px;
`;

const Gallery = props => {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t('titleSection.gallery')}</h2>
            <CarouselWrapp>
                <Carousel autoplay>
                    {props.data.map(el => {
                        return (
                            <div>
                                <img src={el.img} alt={'slide'}></img>
                            </div>
                        );
                    })}
                </Carousel>
            </CarouselWrapp>
        </>
    );
};

export default Gallery;
