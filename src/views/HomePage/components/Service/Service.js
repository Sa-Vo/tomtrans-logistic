import React from 'react';
import { ServiceBox, ServiceItem, ServiceTitle } from './ServiceStyled';

class Service extends React.Component {
    render() {
        const { serviceData } = this.props;
        return (
            <ServiceBox>
                {serviceData.map((item, idx) => (
                    <ServiceItem key={idx}>
                        <picture>
                            <source
                                srcSet={`${item.imgSmall} 1x`}
                                media="(max-width: 1023px)"
                            />
                            <img
                                srcSet={`${item.imgLarge} 2x`}
                                alt={item.title}
                                width={940}
                            />
                        </picture>

                        <ServiceTitle>{item.title}</ServiceTitle>
                    </ServiceItem>
                ))}
            </ServiceBox>
        );
    }
}

export default Service;
