import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languageCodeOnly } from '../../../../service/i18n';
import Item from './Item';

const SliderCard = () => {
    const { i18n } = useTranslation();
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`/data/dataSliderCar/${languageCodeOnly(i18n.language)}.json`)
            .then(response => response.json())
            .then(json => setItems(json));
    }, [i18n.language]);

    return items.length === 0 ? (
        <p>Loading...</p>
    ) : (
        <>
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </>
    );
};

export default SliderCard;
