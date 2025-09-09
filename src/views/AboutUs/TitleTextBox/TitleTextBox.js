import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../../assets/LogoGreen.png';
import {
    Box,
    TextBox,
    ImageBox,
    LilBox,
    BigBox,
    ContaierBox,
} from './TitleTextBoxStyled';

const TitleTextBox = () => {
    const { t } = useTranslation();

    return (
        <ContaierBox>
            <Box>
                <TextBox className="left">
                    <h1>{t('aboutUsPage.AboutUsTitle')}</h1>
                    <h3> {t('aboutUsPage.AboutUsSubTitle')}</h3>
                    <p>
                        {t('aboutUsPage.AboutUsMainTextPt1')}
                        <br />
                        <br />
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
            <Box>
                <TextBox className="bottom">
                    <ul>
                        <h3>
                            {t('aboutUsPage.KeyAdvantages')}
                        </h3>
                        <p>{t('aboutUsPage.Adv1')}</p>
                        <p>{t('aboutUsPage.Adv2')} </p>
                        <p>{t('aboutUsPage.Adv3')} </p>
                        <p>{t('aboutUsPage.Adv4')} </p>
                        <p>{t('aboutUsPage.Adv5')}</p>
                        <p>{t('aboutUsPage.Adv6')}</p>
                        <p>{t('aboutUsPage.Adv7')}</p>
                    </ul>
                </TextBox>
            </Box>
        </ContaierBox>
    );
};

export default TitleTextBox;
