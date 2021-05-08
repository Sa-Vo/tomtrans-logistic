import React from 'react';
import { useTranslation } from 'react-i18next';
import { BoxInfoCarItem, Circle, BoxDescrCar } from './CarParkStyled';

function Item({ count, infoTop, infoBottom, imgg }) {
    const { t } = useTranslation();

    return (
        <BoxInfoCarItem>
            <div>
                <Circle>{count}</Circle>
            </div>
            <BoxDescrCar>
                <p>{infoTop}</p>
                <span>{infoBottom}</span>
            </BoxDescrCar>
        </BoxInfoCarItem>
    );
}

export default Item;
