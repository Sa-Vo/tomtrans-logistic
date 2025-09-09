import styled from 'styled-components';
import * as palette from '../../../utils/VariablesStyled';

export const Box = styled.div`
    @media ${palette.device.tablet} {
        flex-direction: row;
    }

    flex-direction: column;
    display: flex;
    justify-content: center;
    color: rgb(31, 30, 34);

    div {
        // max-width: 130rem;
        background-color: rgba(150, 150, 150, 0.3);
    }

    h1 {
        font-size: 3rem;

        @media ${palette.device.mobileM} {
            width: fit-content;
        }
    }
    h3 {
        font-size: 4rem;
    }

    p {
        margin: 1rem 0;
        font-size: 1rem;
    }
`;

export const TextBox = styled.div`


    @media ${palette.device.tablet} {
        width: 100%;
    }
    @media ${palette.device.mobileS} {
        padding-inline: 1rem;
    }
    &.left {
        @media ${palette.device.mobileS} {
            padding-inline: 1rem;
        }
        @media ${palette.device.laptop} {
            padding: 5rem 10rem;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5rem 10rem;
    }
    &.bottom{
        padding-bottom: 2rem;
        @media ${palette.device.tablet} {
          padding-inline: 6.5rem;
        }
      
    }
    h1 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 3.1rem;

        margin: 30px 0;
        color: rgb(39, 122, 53);
    }

    p {
        @media ${palette.device.mobileS} {
            font-size: 1.5rem;
        }
        @media ${palette.device.laptop} {
            font-size: 2.4rem;
        }
        text-align: justify;
    }
`;
export const ImageBox = styled.div`
    img {
        @media (max-width: 1748px) {
            width: 10rem;
        }
        @media ${palette.device.tablet} {
            display: block;
        }
        display: none;
        margin: 4rem 0;
        width: 20rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem 5rem;
`;
export const BigBox = styled.div`
    background: transparent !important;
    background-color: transparent;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media ${palette.device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;
export const LilBox = styled.div`
    background: transparent !important;
    margin: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
        font-size: 3rem;
        @media ${palette.device.tablet}{
            font-size: 5rem;
        }
    }
    p {
        font-size: 1.5rem;
    }
`;

export const ContaierBox = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 1720px;
    margin: 0 auto;
    margin-inline: 10rem;
    @media ${palette.device.mobileS} {
        margin-inline: 3rem;
        padding-top: 6rem;
    }
    @media ${palette.device.tablet} {
        padding-top: 22rem;
        margin-inline: 10rem;
    }
`;
