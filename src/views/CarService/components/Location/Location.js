import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWhatsapp,
    faFacebookMessenger,
    faViber,
} from '@fortawesome/free-brands-svg-icons';

import {
    LocationWrapp,
    LocationBox,
    LocationInfo,
    Box,
    ItemText,
    Social,
    SocialItem,
    SocialBox,
    MapBox,
} from './LocationStyled';

const Location = () => {
    const { t } = useTranslation();

    return (
        <LocationWrapp>
            <h2>{t('titleSection.location')}</h2>

            <LocationBox>
                <LocationInfo>
                    <Box>
                        <div>
                            <ItemText>
                                <p>{t('contacts.phone')}</p>
                                <p>+38(099)973-68-23</p>
                            </ItemText>
                            <ItemText>
                                <p>E-MAIL</p>
                                <p>tomtranslogistic@ukr.net</p>
                            </ItemText>
                        </div>
                        <div>
                            <ItemText>
                                <p>{t('contacts.adress')}</p>
                                <p>{t('contacts.adressInfo')}</p>
                            </ItemText>
                            <ItemText>
                                <p>{t('contacts.timeWork')}</p>
                                <p>{t('contacts.timeWorkInfo')}</p>
                            </ItemText>
                        </div>
                    </Box>

                    <Social>
                        <p>{t('contacts.social')}</p>
                        <SocialBox>
                            <SocialItem>
                                <a href="#" title="Viber">
                                    <FontAwesomeIcon icon={faViber} />
                                </a>
                            </SocialItem>
                            {/* <SocialItem>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookMessenger} />
                            </a>
                        </SocialItem> */}
                            <SocialItem>
                                <a
                                    href="https://api.whatsapp.com/send?phone=0(99)973-68-23"
                                    title="Whatsapp"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                            </SocialItem>
                        </SocialBox>
                    </Social>
                </LocationInfo>

                <MapBox>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.32458799399!2d26.052873815839725!3d48.33506604536393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s8GW883P4%2B22!5e0!3m2!1suk!2sua!4v1617371869085!5m2!1suk!2sua"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </MapBox>
            </LocationBox>
        </LocationWrapp>
    );
};

export default Location;
