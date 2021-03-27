import React from 'react';
import {
    Card,
    SLiderImgBox,
    SliderInfoBox,
    SliderTitle,
    SLiderSubText,
    SizeBox,
    SizeBoxItem,
} from './SliderStyled';

class SliderCard extends React.Component {
    render() {
        const { data } = this.props;
        const size = {
            length: 'Довжина:',
            width: 'Ширина:',
            height: 'Висота:',
        };
        return (
            <>
                {data.map((item, idx) => (
                    <Card key={idx}>
                        <SLiderImgBox>
                            <img src={item.image} alt="" />
                        </SLiderImgBox>

                        <SliderInfoBox>
                            <div>
                                <SliderTitle>{item.title}</SliderTitle>
                                <SLiderSubText>{item.textOne}</SLiderSubText>
                                <SLiderSubText>
                                    <b>{item.textTwo}</b>
                                </SLiderSubText>
                            </div>
                            <SizeBox>
                                <SizeBoxItem>
                                    <p>{size.length}</p>
                                    <p>{item.lengthInfo}</p>
                                </SizeBoxItem>

                                <SizeBoxItem>
                                    <p>{size.width}</p>
                                    <p>{item.widthInfo}</p>
                                </SizeBoxItem>

                                <SizeBoxItem>
                                    <p>{size.height}</p>
                                    <p>{item.heightInfo}</p>
                                </SizeBoxItem>
                            </SizeBox>
                        </SliderInfoBox>
                    </Card>
                ))}
            </>
        );
    }
}

export default SliderCard;
