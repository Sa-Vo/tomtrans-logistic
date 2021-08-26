import React from 'react';
import { useTranslation } from 'react-i18next';
import { AwardsSection, AwardsList, AwardsItem } from './AwardsStyle';
import dataAward from './AwardsData';

const Awards = () => {
    const { t } = useTranslation();

    return (
        <AwardsSection>
            <h2>{t('AwardsTitle')}</h2>

            <AwardsList>
                {dataAward.map(({ imgSrc, alt }) => (
                    <AwardsItem>
                        <img src={imgSrc} alt={alt} />
                    </AwardsItem>
                ))}
            </AwardsList>
        </AwardsSection>
    );
};

export default Awards;
