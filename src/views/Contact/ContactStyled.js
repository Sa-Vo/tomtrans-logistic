import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';
import ContactBg from '../../assets/ContactBg.png';

export const ContactPage = styled.main`
    @media ${palette.device.laptop} {
        height: 120vh;
    }

    section {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${ContactBg});
        padding: 0 1rem;
        height: 125rem;

        @media ${palette.device.laptop} {
            height: 120vh;
        }

        @media ${palette.device.laptopL} {
            padding: 0;
        }
    }
`;

export const MapBox = styled.div`
    ${palette.Wrapper}
    padding-top: 13rem;

    @media ${palette.device.tablet} {
        padding-top: 18rem;
    }

    @media ${palette.device.laptop} {
        padding-top: 30rem;
        display: flex;
        justify-content: space-between;
    }

    @media ${palette.device.laptopL} {
        padding-top: 20rem;
        display: flex;
        justify-content: space-between;
    }

    iframe {
        border: none;
        width: 100%;
        @media (min-width: 320px) and (max-width: 767px) {
            margin-top: 2rem;
            height: 45rem;
            border-radius: 2rem;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            height: 35rem;
            margin-top: 1rem;
            border-radius: 2rem;
        }
        @media ${palette.device.laptop} {
            width: 60%;
            border-top-right-radius: 2rem;
            border-bottom-right-radius: 2rem;
        }
    }

    h1 {
        text-align: center;
        padding-bottom: 2rem;
        @media ${palette.device.laptop} {
            padding-bottom: 3rem;
        }
    }
`;

export const Info = styled.div`
    padding: 1rem 1rem;
    background-color: rgba(255, 255, 255, 0.9);

    @media (min-width: 320px) and (max-width: 1023px) {
        border-radius: 2rem;
    }
    @media ${palette.device.laptop} {
        padding: 5rem 0;
        width: 40%;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }
`;

export const InfoList = styled.div``;

export const InfoItem = styled.article`
    margin: 0 auto;
    background-color: white;
    border-radius: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    box-shadow: 9.057px 7.873px 30.4px 1.6px rgba(0, 0, 0, 0.24);
    @media ${palette.device.laptop} {
        margin: 1rem 2rem;
        max-width: 40rem;
    }
    @media ${palette.device.laptopL} {
        margin: 0 auto;
        margin-bottom: 1rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const InfoTitle = styled.p`
    padding: 1rem 3rem;
    font-size: 2rem;

    @media ${palette.device.tablet} {
        p {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`;

export const PhoneBox = styled.ul`
    padding: 0;
    margin: 0 3rem;
    list-style: none;
    font-size: 1.5rem;

    @media ${palette.device.tablet} {
        font-size: 2rem;
    }
`;

export const Text = styled.p`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const PhoneItem = styled.li`
    display: flex;
`;

export const Phone = styled.a`
    text-decoration: none;
    color: #277a35;
    font-weight: 500;
    margin-bottom: 1rem;
    font-size: 1.5rem;

    @media ${palette.device.tablet} {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;

export const Name = styled.p`
    color: rgba(94, 94, 94, 0.5);
    margin-left: 2rem;
`;
export const EmailBox = styled.div`
    color: #277a35;
    margin: 0 3rem;
    font-weight: 500;
    font-size: 1.5rem;

    p {
        margin-bottom: 1rem;
    }

    @media ${palette.device.tablet} {
        font-size: 2rem;
    }
`;
