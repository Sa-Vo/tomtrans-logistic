import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';

export const activeStyle = '#277a35';

export const NavMenu = styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    /* flex-flow: row nowrap; */

    @media (max-width: 768px) {
        background-color: #0d2538;
        position: fixed;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        margin: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    }
`;

export const NavTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
`;

export const LogoBox = styled.div`
    width: 9rem;
`;

export const NavContactBox = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
`;

export const NavContactBoxItem = styled.li`
    margin-right: 4rem;
    p {
        color: white;
        &:nth-child(1) {
            color: rgba(255, 255, 255, 0.5);
        }
    }
    &:last-child {
        margin: 0;
    }
`;

export const NavItemBox = styled.ul`
    border-top: 3px solid rgba(241, 241, 241, 0.4);
    padding: 15px 15px 0 15px;
    list-style: none;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-flow: column nowrap;
    }
`;

export const NavItem = styled.li`
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }
    &:last-child {
        margin: 0;
    }

    a {
        color: ${palette.white};
        font-size: 20px;
        text-transform: uppercase;
        text-decoration: none;
        &::after {
            display: block;
            content: '';
            width: 0;
            background-color: ${palette.green};
            height: 2px;
            transition: width 350ms cubic-bezier(0.76, 0.02, 0.24, 0.99);
        }
        &:hover {
            color: ${palette.green};
            transition: 0.3s;
        }
        &:hover::after {
            width: 100%;
        }
        &::not(:hover) {
            transition: 0.3s;
        }
    }
`;
