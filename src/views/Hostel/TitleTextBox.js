import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../HomePage/components/TitleTextBoxStyle';

const TitleTextBox = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <p>{t('titlePage.subTitleHostel.descr')}</p>
        </Box>
    );
};

export default TitleTextBox;
