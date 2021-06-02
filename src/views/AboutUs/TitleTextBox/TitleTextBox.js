import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../../HomePage/components/TitleTextBoxStyle';

const TitleTextBox = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <h1>{t('titlePage.home')}</h1>

            <p>{t('titlePage.subTitleHome.descrFisrt')}</p>
            <p>{t('titlePage.subTitleHome.descrSecond')}</p>
        </Box>
    );
};

export default TitleTextBox;
