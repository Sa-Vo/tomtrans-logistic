import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';
import ContactBg from '../../assets/ContactBg.png';

export const ContactPage = styled.main`
    @media ${palette.device.laptop} {
        height: 100vh;
    }

    section {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${ContactBg});
        padding: 0 1rem;
        height: 115rem;

        @media ${palette.device.laptop} {
            height: 100vh;
        }

        @media ${palette.device.laptopL} {
            padding: 0;
        }
    }
`;

export const MapBox = styled.div`
    ${palette.Wrapper}
    padding-top: 15rem;

    @media ${palette.device.tablet} {
        padding-top: 15rem;
    }

    @media ${palette.device.laptop} {
        padding-top: 18rem;
        display: flex;
        justify-content: space-between;
    }

    @media ${palette.device.laptopL} {
        padding-top: 25rem;
        display: flex;
        justify-content: space-between;
    }

    iframe {
        border: none;
        width: 100%;
        @media (min-width: 320px) and (max-width: 1023px) {
            margin-top: 2rem;
            height: 45rem;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;
        }
        @media ${palette.device.laptop} {
            width: 60%;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }

    h1 {
        padding-top: 1rem;
        text-align: center;
    }
`;

export const Info = styled.div`
    padding: 1rem 1rem;
    background-color: rgba(255, 255, 255, 0.9);

    @media (min-width: 320px) and (max-width: 1023px) {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    @media ${palette.device.laptop} {
        padding: 5rem 0;
        width: 40%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
`;

export const InfoList = styled.div``;

export const InfoItem = styled.article`
    /* max-width: 35rem; */
    margin: 0 auto;
    background-color: white;
    border-radius: 2rem;
    margin-bottom: 1rem;
    box-shadow: 9.057px 7.873px 30.4px 1.6px rgba(0, 0, 0, 0.24);
    @media ${palette.device.laptop} {
        margin: 0 2rem;
        max-width: 40rem;
    }
    @media ${palette.device.laptopL} {
        margin: 0 auto;
    }
`;

export const InfoTitle = styled.p`
    margin: 1rem 4rem;
    font-size: 1.5rem;

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
        p {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`;

export const PhoneItem = styled.li`
    display: flex;
`;

export const Phone = styled.p`
    color: #277a35;
    font-weight: 500;
    margin-bottom: 1rem;
    font-size: 1.5rem;

    @media ${palette.device.tablet} {
        p {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`;

export const Name = styled.p`
    color: rgba(94, 94, 94, 0.5);
    margin-left: 2rem;
`;
export const EmailBox = styled.div`
    color: #277a35;
    margin: 1rem 3rem;
    font-weight: 500;
    font-size: 1.5rem;

    @media ${palette.device.tablet} {
        p {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`;
