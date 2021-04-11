import styled from 'styled-components';
import * as palette from './VariablesStyled';

export const LocationWrappDef = () => `
    height: 54.5rem;
    @media ${palette.device.tablet} {
        padding-top: 4rem;
        height: 48rem;
    }
    @media ${palette.device.laptop} {
        height: auto;
    }
    @media ${palette.device.laptopL} {
        height: 75rem;
    }
`;

export const LocationBoxDef = () => `
    display: block;
    padding-top: 2rem;
    @media ${palette.device.laptop} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4rem;
    }
`;

export const LocationInfoDef = () => `
    padding: 0 1rem;

    @media ${palette.device.laptop} {
        width: 50%;
        padding: 0;
    }
`;

export const BoxDef = () => `
    display: block;
    margin-bottom: 2rem;
    @media ${palette.device.tablet} {
        display: flex;
        margin-bottom: 4rem;
        div {
            margin-right: 4rem;
            &:last-child {
                margin: 0;
            }
        }
    }
`;
export const ItemTextDef = () => `
    margin-bottom: 2rem;

    &:last-child {
        margin: 0;
    }

    p {
        font-size: 1.7rem;
        margin-bottom: 1rem;
        &:last-child {
            font-weight: 500;
            color: ${palette.green};
            margin: 0;
        }
        @media ${palette.device.tablet} {
            font-size: 2rem;
        }
    }

    @media ${palette.device.mobileL} {
        text-align: center;
    }

    @media ${palette.device.tablet} {
        margin-bottom: 4rem;
    }

    @media ${palette.device.laptop} {
        text-align: left;
    }
`;

export const SocialDef = () => `
    p {
        text-align: center;
        font-size: 1.7rem;
        margin-bottom: 1rem;

        @media ${palette.device.tablet} {
            font-size: 2rem;
        }

        @media ${palette.device.laptop} {
            text-align: left;
            font-size: 2rem;
        }
    }
`;

export const SocialBoxDef = () => `
    display: flex;
    justify-content: center;

    @media ${palette.device.laptop} {
        justify-content: start;
    }
`;

export const SocialItemDef = () => `
    margin-right: 2rem;
    &:last-child {
        margin: 0;
    }
    a {
        text-decoration: none;
        font-size: 3rem;
        transition: 0.5s;
        &:hover {
            color: ${palette.green};
            transition: 0.5s;
        }

        @media ${palette.device.laptop} {
            font-size: 4rem;
        }
    }
`;

export const MapBoxDef = () => `
    @media ${palette.device.laptop} {
        width: 50%;
    }
    iframe {
        width: 100%;
        height: 20rem;
        border: none;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
        @media ${palette.device.laptop} {
            border-radius: 0;
            height: 40rem;
        }

        @media ${palette.device.laptopL} {
            border-radius: 0;
            height: 60rem;
        }
    }
    /* width: 50%; */
`;
