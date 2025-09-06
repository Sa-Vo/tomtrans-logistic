import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../../assets/LogoGreen.png';
import { Box, TextBox, ImageBox, LilBox, BigBox } from './TitleTextBoxStyled';

const TitleTextBox = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <TextBox className="left">
                <h1>{t('aboutUsPage.AboutUsTitle')}</h1>
                <h3> {t('aboutUsPage.AboutUsSubTitle')}
                </h3>
                <p>
                    {t('aboutUsPage.AboutUsMainTextPt1')}
                    <br /><br />
                    {t('aboutUsPage.AboutUsMainTextPt2')}
                </p>
            </TextBox>
            <ImageBox>
                <img src={Logo} />
                <BigBox className="trans">
                    <LilBox className="trans">
                        <span> 30+</span>
                        <p>{t('aboutUsPage.YoS')}</p>
                    </LilBox>
                    <LilBox>
                        <span> 40+</span>
                        <p>{t('aboutUsPage.ToR')}</p>
                    </LilBox>
                    <LilBox>
                        <span> 50+</span>
                        <p>{t('aboutUsPage.RC')}</p>
                    </LilBox>
                    <LilBox>
                        <span> 100+</span>
                        <p>{t('aboutUsPage.D/M')}</p>
                    </LilBox>
                </BigBox>
            </ImageBox>
        </Box>
    );
};

export default TitleTextBox;
