import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { HostelPage } from './HostelStyled';
import TitleTextBox from './TitleTextBox';

const Hostel = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('link.hostel')}</title>
            </Helmet>

            <HostelPage>
                <section>
                    <TitleTextBox />
                </section>
            </HostelPage>
        </>
    );
};

export default Hostel;
