import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import {
    ContactPage,
    MapBox,
    Info,
    InfoList,
    InfoItem,
    InfoTitle,
    PhoneBox,
    PhoneItem,
    Phone,
    Name,
    EmailBox,
    Text,
} from './ContactStyled';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('link.contact')}</title>
            </Helmet>

            <ContactPage>
                <section>
                    <MapBox>
                        <Info>
                            <h1>{t('contactPage.title')}</h1>
                            <InfoList>
                                <InfoItem>
                                    <InfoTitle>
                                        {t('contactPage.logistics')}
                                    </InfoTitle>
                                    <PhoneBox>
                                        <PhoneItem>
                                            <Phone href="tel:+380503380552">
                                                +38(050)338-05-52
                                            </Phone>
                                            <Name>
                                                {t('contactPage.grigory')}
                                            </Name>
                                        </PhoneItem>

                                        <PhoneItem>
                                            <Phone href="tel:+380999736823">
                                                +38(099)973-68-23
                                            </Phone>
                                            <Name>
                                                {t('contactPage.maksym')}
                                            </Name>
                                        </PhoneItem>

                                        <PhoneItem>
                                            <Phone href="tel:+380637637570">
                                                +38(063)763-75-70
                                            </Phone>
                                            <Name>
                                                {t('contactPage.vadim')}
                                            </Name>
                                        </PhoneItem>


                                        <Text>
                                            {t('contactPage.accounting')}
                                        </Text>

                                        <PhoneItem>
                                            <Phone href="tel:+380505105444">
                                                +38(050)510-54-44
                                            </Phone>
                                            <Name>
                                                {t('contactPage.lyudmyla')}
                                            </Name>
                                        </PhoneItem>
                                        
                                        <PhoneItem>
                                            <Phone href="tel:+380667400158">
                                                +38(066)740-01-58
                                            </Phone>
                                            <Name>
                                                {t('contactPage.orusya')}
                                            </Name>
                                        </PhoneItem>

                                        <Text>
                                            {t('contactPage.service')}
                                        </Text>

                                        <PhoneItem>
                                            <Phone href="tel:+38095 10 27 988">
                                                +38(095)102-79-88
                                            </Phone>
                                            <Name>
                                                {t('contactPage.valentin')}
                                            </Name>
                                        </PhoneItem>
<PhoneItem>
                                            <Phone href="tel:+380987987224 ">
                                            +38(098)798-72-24 
                                            </Phone>
                                            <Name>
                                                {t('contactPage.sanya')}
                                            </Name>
                                        </PhoneItem>

                                    </PhoneBox>
                                </InfoItem>

                                <InfoItem>
                                    <InfoTitle>E-MAIL</InfoTitle>
                                    <EmailBox>
                                        <p>tomtranslogistic@ukr.net</p>
                                        <p>tgi2007@ukr.net</p>
                                    </EmailBox>
                                </InfoItem>

                                <InfoItem>
                                    <article>
                                        <InfoTitle>
                                            {t('contactPage.address')}
                                        </InfoTitle>
                                        <EmailBox>
                                            {t('contactPage.adressInfo')}
                                        </EmailBox>

                                        <InfoTitle>
                                            {t('contactPage.workTime')}
                                        </InfoTitle>
                                        <EmailBox>
                                            {t('contactPage.workTimeInfo')}
                                        </EmailBox>
                                    </article>
                                </InfoItem>
                            </InfoList>
                        </Info>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.32458799399!2d26.052873815839725!3d48.33506604536393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s8GW883P4%2B22!5e0!3m2!1suk!2sua!4v1617371869085!5m2!1suk!2sua"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </MapBox>
                </section>
            </ContactPage>
        </>
    );
};

export default Contact;
