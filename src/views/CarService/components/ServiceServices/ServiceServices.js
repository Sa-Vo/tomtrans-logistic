import React from 'react';

import { Title, Services, ServicesItem } from './ServiceServicesStyled';

class ServiceServices extends React.Component {
    render() {
        const { title, serviceData } = this.props;
        return (
            <div>
                <Title>{title}</Title>
                <Services>
                    {serviceData.map(info => (
                        <ServicesItem key={info.id}>
                            <div>
                                <img src={info.ico} alt="" />
                            </div>

                            <h3>{info.title}</h3>
                        </ServicesItem>
                    ))}
                </Services>
            </div>
        );
    }
}

export default ServiceServices;
