import styled from 'styled-components';
import * as palette from '../../../utils/VariablesStyled';

export const Box = styled.article`
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    max-width: 55rem;
    padding: 0 1rem;

    @media ${palette.device.tablet} {
        top: 45%;
        left: 42%;
    }
    @media ${palette.device.laptop} {
        top: 45%;
        left: 28%;
    }

    @media ${palette.device.laptopL} {
        left: 27%;
    }

    h1 {
        font-size: 6rem;
        background-color: rgba(0, 0, 0, 0.4);

        @media ${palette.device.mobileM} {
            width: 32rem;
        }
        @media ${palette.device.mobileM} {
            width: fit-content;
        }
    }

    p {
        margin: 1rem 0;
        font-size: 2rem;
        background-color: rgba(0, 0, 0, 0.4);
    }

    @media ${palette.device.tablet} {
        width: 45rem;
        h1 {
            font-size: 5rem;
            padding: 1.5rem
        }

        p {
            font-size: 3rem;
            padding: 1rem
        }
    }
`;