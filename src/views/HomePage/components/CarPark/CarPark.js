import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Item from './Item';
import { languageCodeOnly } from '../../../../service/i18n';
import { BoxInfoCar } from './CarParkStyled';

const CarPark = () => {
    const { i18n } = useTranslation();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`/data/dataCarPark/${languageCodeOnly(i18n.language)}.json`)
            .then(response => response.json())
            .then(json => setItems(json));
    }, [i18n.language]);

    return items.length === 0 ? (
        <p>Loading...</p>
    ) : (
        <BoxInfoCar>
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </BoxInfoCar>
    );
};

export default CarPark;
