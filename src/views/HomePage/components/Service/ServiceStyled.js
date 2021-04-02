import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const ServiceBox = styled.ul`
    padding: 4rem 1rem;
    max-width: 130rem;
    margin: 0 auto;
    list-style: none;
    display: block;
    @media ${palette.device.laptop} {
        display: flex;
    }
`;

export const ServiceItem = styled.li`
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: ${palette.shadow};
    transition: all 0.5s ease;
    margin: 0 auto 3rem;
    &:last-child {
        margin: 0 auto;
    }
    @media ${palette.device.mobileL} {
        width: 35rem;
    }
    @media ${palette.device.tablet} {
        width: 60rem;
    }
    @media ${palette.device.laptop} {
        margin: 0 3rem 0 0;

        &:last-child {
            margin: 0;
        }
    }

    &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            0deg,
            rgba(20, 85, 115, 1) 5%,
            rgba(20, 85, 115, 0) 100%
        );
        transition: all 0.5s ease;
    }
    &:hover {
        transition: all 0.5s ease;
        transform: scale(1.05);
    }
    &:hover {
        h3 {
            color: white;
            font-size: 3.5rem;
            transition: all 0.5s ease;
        }
    }

    &:hover:after {
        top: 0;
    }
`;

export const ServiceTitle = styled.h3`
    transition: all 0.5s ease;
    position: absolute;
    color: white;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 3rem;
    width: 100%;
    text-align: center;
    z-index: 1;
    @media ${palette.device.tablet} {
        font-size: 6rem;
    }
    @media ${palette.device.laptop} {
        color: black;
        font-size: 3rem;
        left: 50%;
        top: 85%;
        transform: translate(-50%, 0);
    }
`;
