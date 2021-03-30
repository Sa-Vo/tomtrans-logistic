import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faFacebookMessenger,
    faViber,
} from '@fortawesome/free-brands-svg-icons';

import {
    LocationBox,
    LocationInfo,
    Box,
    ItemText,
    Social,
    SocialItem,
    SocialBox,
    Map,
} from './LocationStyled';
import FacebookLogo from '../../../../assets/facebook-logo.png';

const Location = () => (
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
                        <a href="#">
                            <FontAwesomeIcon icon={faViber} />
                        </a>
                    </SocialItem>
                    <SocialItem>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebookMessenger} />
                        </a>
                    </SocialItem>
                    <SocialItem>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </SocialItem>
                </SocialBox>
            </Social>
        </LocationInfo>

        <Map>
            <div></div>
        </Map>
    </LocationBox>
);

export default Location;
