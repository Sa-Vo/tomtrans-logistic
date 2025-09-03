import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import LogoAuchan from '../../../assets/LogoPartners/Auchan.png';
import LogoEpic from '../../../assets/LogoPartners/Epic.png';
import LogoFozzy from '../../../assets/LogoPartners/Fozzy.png';
import LogoRoshen from '../../../assets/LogoPartners/Roshen.png';
import LogoImperoFoods from '../../../assets/LogoPartners/ImperoFoods.png';
import LogoSilpo from '../../../assets/LogoPartners/Silpo.png';
import LogoAmic from '../../../assets/LogoPartners/Amic.png';

const SliderBox = styled.div`
    padding: 4rem 0;
`;

const SliderItem = styled.div`
    /* padding-right: 2rem; */
`;

export default function SliderPartners() {
    const settings = {
        arrows: false,
        infinite: true,
        touchMove: false,
        pauseOnHover: false,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <SliderBox>
            <Slider {...settings}>
                <SliderItem>
                    <img src={LogoAuchan} alt="Logo Auchan" />
                </SliderItem>
                <SliderItem>
                    <img src={LogoEpic} alt="Logo Epic" />
                </SliderItem>
                <SliderItem>
                    <img src={LogoFozzy} alt="Logo Fozzy" />
                </SliderItem>
                <SliderItem>
                    <img src={LogoRoshen} alt="Logo Roshen" />
                </SliderItem>
                <SliderItem>
                    <img src={LogoImperoFoods} alt="Logo Imperovo Foods" />
                </SliderItem>
                <SliderItem>
                    <img src={LogoSilpo} alt="Logo Silpo" />
                </SliderItem>
                <SliderItem>
                    <img src={LogoAmic} alt="Logo Amic" />
                </SliderItem>
            </Slider>
        </SliderBox>
    );
}
