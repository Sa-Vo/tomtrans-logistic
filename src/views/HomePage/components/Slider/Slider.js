import React from 'react';
import SliderCard from './SliderCard';
import {
    Slider,
    SliderBox,
} from './SliderStyled';

import ArrowSlider from './ArrowSlider';

class SliderCar extends React.Component {
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
        return (
            <Slider>
                <SliderBox ref={this.myRef}>
                    <SliderCard />
                </SliderBox>

                <ArrowSlider prev={this.prevClick} next={this.nextClick} />
            </Slider>
        );
    }
}

export default SliderCar;
