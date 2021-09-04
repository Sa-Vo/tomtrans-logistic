import React from 'react';

import {
    Card,
    SLiderImgBox,
    SliderInfoBox,
    ContentBox,
    SliderTitle,
    SLiderSubText,
    SizeBox,
    SizeBoxItem,
} from './SliderStyled';

function Item({
    image,
    title,
    textOne,
    textTwo,
    lengthInfo,
    widthInfo,
    heightInfo,
    length,
    width,
    height,
}) {
    return (
        <>
            <Card>
                <SLiderImgBox>
                    <img src={image} alt={title} />
                </SLiderImgBox>

                <SliderInfoBox>
                    <ContentBox>
                        <SliderTitle>{title}</SliderTitle>
                        <SLiderSubText>{textOne}</SLiderSubText>
                        <SLiderSubText>
                            <b>{textTwo}</b>
                        </SLiderSubText>
                    </ContentBox>
                    <SizeBox>
                        <SizeBoxItem>
                            <p>{length}</p>
                            <p>{lengthInfo}</p>
                        </SizeBoxItem>

                        <SizeBoxItem>
                            <p>{width}</p>
                            <p>{widthInfo}</p>
                        </SizeBoxItem>

                        <SizeBoxItem>
                            <p>{height}</p>
                            <p>{heightInfo}</p>
                        </SizeBoxItem>
                    </SizeBox>
                </SliderInfoBox>
            </Card>
        </>
    );
}

export default Item;
