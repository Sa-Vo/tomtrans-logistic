import React from 'react';
import { BoxInfoCar, BoxInfoCarItem, Circle, BoxDescrCar } from './CarParkStyled';

const carPark = () => {
    const infoCarPark = [
        {
            id: 0,
            count: '50+',
            infoTop: 'машин',
            infoBottom: 'в автопарку',
        },

        {
            id: 1,
            count: '21',
            infoTop: 'тонн',
            infoBottom: 'вантажопідйомність',
        },

        {
            id: 2,
            count: '86',
            infoTop: 'm3',
            infoBottom: 'об’єм причепа',
        },
    ];

    return (
        <BoxInfoCar>
            {infoCarPark.map(info => (
                <BoxInfoCarItem key={info.id}>
                    <div>
                        <Circle>
                            {info.count}
                        </Circle>
                    </div>
                    <BoxDescrCar>
                        <p>{info.infoTop}</p>
                        <span>{info.infoBottom}</span>
                    </BoxDescrCar>
                </BoxInfoCarItem>
            ))}
        </BoxInfoCar>
    );
};

export default carPark;
