import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { languageCodeOnly } from '../../../../service/i18n';
import { ServiceBox, ServiceTitle } from './ServiceStyled';

const Service = () => {
    const { i18n } = useTranslation();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`/data/Service/${languageCodeOnly(i18n.language)}.json`)
            .then(response => response.json())
            .then(json => setItems(json));
    }, [i18n.language]);

    return items.length === 0 ? (
        <p>Loading...</p>
    ) : (
        <ServiceBox>
            {items.map(item => (
                <li key={item.idx}>
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
};

export default Service;
