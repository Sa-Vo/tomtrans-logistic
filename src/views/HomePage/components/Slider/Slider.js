import React from 'react';
import SliderCard from './SliderCard';
import {
    Slider,
    PrevArrow,
    NextArrow,
    SliderBox,
    ArrowBox,
} from './SliderStyled';
import SLiderData from './SliderData';
import ArrowSlider from './ArrowSlider';

class SliderCar extends React.Component {
    state = {
        data: SLiderData,
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
                <SliderBox ref={this.myRef}>
                    <SliderCard data={data} />
                </SliderBox>

                <ArrowSlider prev={this.prevClick} next={this.nextClick} />
            </Slider>
        );
    }
}

export default SliderCar;
