import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';
import imgLogoPath from '../../assets/Logo.png'

const Navigation = () => (
    <>
        <section className={styles.NavTop}>
            <div className={styles.LogoBox}>
                <img src={imgLogoPath} alt="Logo" width="90" />
            </div>
            <div className={styles.NavContacts}>
                <div className={styles.NavContactsItem}>
                    <p>E-mail</p>
                    <p>tomtranslogistic@ukr.net</p>
                </div>

                <div className={styles.NavContactsItem}>
                    <p>Телефон</p>
                    <p>+38(050)123-45-67</p>
                </div>
            </div>
        </section>

        <ul className={styles.NavigationBox}>
            <li>
                <NavLink
                    className={styles.NavigationLink}
                    activeClassName={styles.NavigationLinkActive}
                    to={routes.home}
                    exact
                >
                    Головна
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={styles.NavigationLink}
                    activeClassName={styles.NavigationLinkActive}
                    to={routes.aboutUs}
                >
                    Про нас
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={styles.NavigationLink}
                    activeClassName={styles.NavigationLinkActive}
                    to={routes.vacancies}
                >
                    Ваканції
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={styles.NavigationLink}
                    activeClassName={styles.NavigationLinkActive}
                    to={routes.carService}
                >
                    Автосервіс
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={styles.NavigationLink}
                    activeClassName={styles.NavigationLinkActive}
                    to={routes.hostel}
                >
                    Хостел
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={styles.NavigationLink}
                    activeClassName={styles.NavigationLinkActive}
                    to={routes.contacts}
                >
                    Контакти
                </NavLink>
            </li>
        </ul>
    </>
);

export default Navigation;
