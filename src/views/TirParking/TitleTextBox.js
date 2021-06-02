import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../HomePage/components/TitleTextBoxStyle';

const TitleTextBox = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <p>{t('titlePage.subTitleTirParking.descrFisrt')}</p>
            <p>{t('titlePage.subTitleTirParking.descrSecond')}</p>
        </Box>
    );
};

export default TitleTextBox;
