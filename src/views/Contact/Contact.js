import React, { Component } from 'react';
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

export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Helmet>
                    <title>Contacts</title>
                </Helmet>
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
                                                <Phone href="tel:+380999736823">+38(099)973-68-23</Phone>
                                                <Name>Максим</Name>
                                            </PhoneItem>

                                            <PhoneItem>
                                                <Phone href="tel:+380997274533">+38(099)727-45-33</Phone>
                                                <Name>Вадім</Name>
                                            </PhoneItem>

                                            <PhoneItem>
                                                <Phone href="tel:+380956959555">+38(095)695-95-55</Phone>
                                                <Name>Іван</Name>
                                            </PhoneItem>

                                            <PhoneItem>
                                                <Phone href="tel:+380509599461">+38(050)959-94-61</Phone>
                                                <Name>Сергій</Name>
                                            </PhoneItem>
                                            <Text>Бухгалтерія</Text>
                                            <PhoneItem>
                                                <Phone href="tel:+380505010544">+38(050)501-05-44</Phone>
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
                                            <EmailBox>
                                                Пн-Сб 8:30 до 19:00
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
    }
}
