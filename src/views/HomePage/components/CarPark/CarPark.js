import React from 'react';

import {
    BoxInfoCar,
    BoxInfoCarItem,
    Circle,
    BoxDescrCar,
} from './CarParkStyled';

class CarPark extends React.Component {
    render() {
        const { carParkData } = this.props;

        return (
            <BoxInfoCar>
                {carParkData.map(info => (
                    <BoxInfoCarItem key={info.id}>
                        <div>
                            <Circle>{info.count}</Circle>
                        </div>
                        <BoxDescrCar>
                            <p>{info.infoTop}</p>
                            <span>{info.infoBottom}</span>
                        </BoxDescrCar>
                    </BoxInfoCarItem>
                ))}
            </BoxInfoCar>
        );
    }
}

export default CarPark;
