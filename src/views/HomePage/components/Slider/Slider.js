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
import arrowLeft from '../../../../assets/left-arrow.png';
import rightLeft from '../../../../assets/right-arrow.png';

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
                <PrevArrow onClick={this.prevClick}>
                    <ArrowBox>
                        <img src={arrowLeft} alt="" />
                    </ArrowBox>
                </PrevArrow>

                <SliderBox ref={this.myRef}>
                    <SliderCard data={data} />
                </SliderBox>

                <NextArrow onClick={this.nextClick}>
                    <ArrowBox>
                        <img src={rightLeft} alt="" />
                    </ArrowBox>
                </NextArrow>
            </Slider>
        );
    }
}

export default SliderCar;
