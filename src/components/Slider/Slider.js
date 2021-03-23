import React from 'react';
import SliderCard from './SliderCard';
import { Slider, PrevArrow, NextArrow, SliderBox } from './SliderStyled';
import SLideOne from '../../assets/Slide-1.png';
import arrowLeft from '../../assets/left-arrow.png';
import rightLeft from '../../assets/right-arrow.png';

class SliderCar extends React.Component {
    state = {
        data: [
            {
                image: `${SLideOne}`,
                title: 'Платформа',
                textOne:
                    'Рефрижераторний напівпричіп для перевезення заморожених продуктів.',
                textTwo:
                    'Підтримуваний температурний режим: від + 25 ° C до -20 ° C',
                lengthInfo: '13 620мм',
                widthInfo: '2 550мм',
                heightInfo: '2 600мм',
            },

            {
                image: `${SLideOne}`,
                title: 'Поїзд',
                textOne:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, molestias.',
                textTwo:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, molestias.',
                lengthInfo: '13 620мм',
                widthInfo: '2 550мм',
                heightInfo: '2 600мм',
            },
        ],
    };

    myRef = React.createRef();

    prevClick = () => {
        const slide = this.myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if (slide.scrollLeft <= 0) {
            slide.scrollLeft = slide.scrollWidth;
        }
    };

    nextClick = () => {
        const slide = this.myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
            slide.scrollLeft = 0;
        }
    };

    render() {
        const { data } = this.state;
        return (
            <Slider>
                <PrevArrow onClick={this.prevClick}>
                    <img src={arrowLeft} alt="" />
                </PrevArrow>
                <SliderBox ref={this.myRef}>
                    <SliderCard data={data} />
                </SliderBox>
                <NextArrow onClick={this.nextClick}>
                    <img src={rightLeft} alt="" />
                </NextArrow>
            </Slider>
        );
    }
}

export default SliderCar;
