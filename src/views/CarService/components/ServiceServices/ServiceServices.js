import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languageCodeOnly } from '../../../../service/i18n';
import { Title, Services, ServicesItem } from './ServiceServicesStyled';

const ServiceServices = () => {
    const { t, i18n } = useTranslation();
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`/data/serviceServices/${languageCodeOnly(i18n.language)}.json`)
            .then(response => response.json())
            .then(json => setItems(json));
    }, [i18n.language]);

    return items.length === 0 ? (
        <p>Loading...</p>
    ) : (
        <div>
            <Title>{t('ServiceServicesTitle')}</Title>
            <Services>
                {items.map(item => (
                    <ServicesItem key={item.id}>
                        <div>
                            <img src={item.ico} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                    </ServicesItem>
                ))}
            </Services>
        </div>
    );
};

export default ServiceServices;
