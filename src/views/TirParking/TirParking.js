import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { TirParkingPage } from './TirParkingStyled';
import TitleTextBox from './TitleTextBox';

const TirParking = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('link.tirParking')}</title>
            </Helmet>

            <TirParkingPage>
                <section>
                    <TitleTextBox />
                </section>
            </TirParkingPage>
        </>
    );
};

export default TirParking;
