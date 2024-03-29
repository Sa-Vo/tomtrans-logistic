import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import TitleTextBox from './TitleTextBox/TitleTextBox';
import Awards from './Awards/index';
import { AboutUsPage, AboutUsSlide } from './AboutUsStyled';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('link.aboutUs')}</title>
            </Helmet>

            <AboutUsPage>
                <AboutUsSlide>
                    <TitleTextBox />
                </AboutUsSlide>

                <Awards />
            </AboutUsPage>
        </>
    );
};

export default AboutUs;