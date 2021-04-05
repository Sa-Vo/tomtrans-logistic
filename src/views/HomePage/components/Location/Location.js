import React from 'react';
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

class Location extends React.Component {
    render() {
        const { title, darkTheme } = this.props;
        return (
            <LocationWrapp>
                <h2>{title}</h2>

                <LocationBox>
                    <LocationInfo>
                        <Box>
                            <div>
                                <ItemText>
                                    <p>Телефон</p>
                                    <p>+38(050)123-46-57</p>
                                </ItemText>
                                <ItemText>
                                    <p>E-MAIL</p>
                                    <p>tomtranslogistic@ukr.net</p>
                                </ItemText>
                            </div>
                            <div>
                                <ItemText>
                                    <p>Адреса</p>
                                    <p>Автошлях 3301</p>
                                </ItemText>
                                <ItemText>
                                    <p>Режим роботи</p>
                                    <p>Пт-Пт 10:00 до 20:00</p>
                                </ItemText>
                            </div>
                        </Box>

                        <Social>
                            <p>Месенджери</p>
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
                            // width="600"
                            // height="580"
                            // style={{ border: '0', width: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </MapBox>
                </LocationBox>
            </LocationWrapp>
        );
    }
}

export default Location;
