import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import LogoAuchan from '../../../assets/LogoPartners/Auchan.png';
import LogoEpic from '../../../assets/LogoPartners/Epic.png';
import LogoFozzy from '../../../assets/LogoPartners/Fozzy.png';
import LogoMetro from '../../../assets/LogoPartners/Metro.png';
import LogoSilpo from '../../../assets/LogoPartners/Silpo.png';

const SliderBox = styled.div`
    padding: 4rem 0;
`;

export default function SliderPartners() {
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 0,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <SliderBox>
            <Slider {...settings}>
                <div>
                    <img src={LogoAuchan} alt="" />
                </div>
                <div>
                    <img src={LogoEpic} alt="" />
                </div>
                <div>
                    <img src={LogoFozzy} alt="" />
                </div>
                <div>
                    <img src={LogoMetro} alt="" />
                </div>
                <div>
                    <img src={LogoSilpo} alt="" />
                </div>
            </Slider>
        </SliderBox>
    );
}
