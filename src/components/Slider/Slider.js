import React from 'react';
import SliderCard from './SliderCard';
import SLideOne from '../../assets/Slide-1.png';

class SliderCar extends React.Component {
    state = {
        data: [
            {
                image: `${SLideOne}`,
                title: 'Платформа',
                textOne:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, molestias.',
                textTwo:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, molestias.',
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
            <div className="wrapper">
                <div className="prev" onClick={this.prevClick}></div>
                <div className="app" ref={this.myRef}>
                    <SliderCard data={data} />
                </div>
                <div className="next" onClick={this.nextClick}></div>
            </div>
        );
    }
}

export default SliderCar;
