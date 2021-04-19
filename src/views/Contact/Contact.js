import React from 'react';
import { Section } from '../../components/Section/Section';
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
} from './ContactStyled';

const Contact = () => (
    <ContactPage>
        <section>
            <MapBox>
                <Info>
                    <h1>Зв'язок з нами</h1>
                    <InfoList>
                        <InfoItem>
                            <InfoTitle>Логістика</InfoTitle>
                            <PhoneBox>
                                <PhoneItem>
                                    <Phone>+38(099)973-68-23</Phone>
                                    <Name>Максим</Name>
                                </PhoneItem>

                                <PhoneItem>
                                    <Phone>+38(099)973-68-23</Phone>
                                    <Name>Вадім</Name>
                                </PhoneItem>

                                <PhoneItem>
                                    <Phone>+38(099)973-68-23</Phone>
                                    <Name>Іван</Name>
                                </PhoneItem>

                                <PhoneItem>
                                    <Phone>+38(099)973-68-23</Phone>
                                    <Name>Сергій</Name>
                                </PhoneItem>
                                <p>Бухгалтерія</p>
                                <PhoneItem>
                                    <Phone>+38(099)973-68-23</Phone>
                                    <Name>Людмила</Name>
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
                                <InfoTitle>Адреса</InfoTitle>
                                <EmailBox>Автошлях Т2603</EmailBox>

                                <InfoTitle>Режим роботи</InfoTitle>
                                <EmailBox>Пт-Пт 10:00 до 20:00</EmailBox>
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
);

export default Contact;
