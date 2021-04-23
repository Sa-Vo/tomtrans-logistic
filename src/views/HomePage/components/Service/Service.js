import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceBox, ServiceTitle } from './ServiceStyled';

class Service extends React.Component {
    render() {
        const { serviceData } = this.props;
        return (
            <ServiceBox>
                {serviceData.map((item, idx) => (
                    <li key={idx}>
                        <Link to={item.src}>
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
                        </Link>
                    </li>
                ))}
            </ServiceBox>
        );
    }
}

export default Service;
