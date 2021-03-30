import React from 'react';
import {
    ServiceBox,
    ServiceItem,
    ServiceTitle,
} from './ServiceStyled';

class Service extends React.Component {
    render() {
        const { serviceData } = this.props;
        return (
            <ServiceBox>
                {serviceData.map((item, idx) => (
                    <ServiceItem key={idx}>
                        <img src={item.img} alt={item.img} />
                        <ServiceTitle>{item.title}</ServiceTitle>
                    </ServiceItem>
                ))}
            </ServiceBox>
        );
    }
}

export default Service;
