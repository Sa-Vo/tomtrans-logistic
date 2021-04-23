import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const Form = styled.form`
    ${palette.FornDefault};
    background-color: ${palette.darkThemeBg};
    color: ${palette.white};
    text-align: center;
    margin-bottom: 4rem;
    @media ${palette.device.laptop} {
        text-align: left;
    }
`;

export const Box = styled.div`
    @media ${palette.device.laptop} {
        display: flex;
        justify-content: space-between;
    }

    div {
        width: 100%;

        @media ${palette.device.tablet} {
            padding-right: 5rem;
        }

        @media ${palette.device.laptop} {
            width: 50rem;
        }

        @media ${palette.device.laptopL} {
            padding: 0;
        }
    }
`;

export const InputBox = styled.div`
    ${palette.InputBoxDefault}
    margin-bottom: 4.4rem;

    input {
        font-size: 2rem;
        color: #a1a5a9;
        border-bottom: 3px solid #a1a5a9;

        &:focus {
            outline: 0;
            border-color: ${palette.green};
        }
    }

    label {
        left: 1.3rem;
        font-size: 2rem;
    }

    input:focus + label,
    input:valid + label {
        color: ${palette.white};
    }
`;

export const MoreInfo = styled.textarea`
    width: 99%;
    height: 30rem;
    font-size: 3rem;
    border: none;
    outline: none;
    background-color: #e0e6ef;
    transition: 0.5s all;

    @media ${palette.device.laptop} {
        width: 50%;
        border: 3px solid gray;
        &:focus {
            outline: none;
            border: 3px solid ${palette.green};
        }
    }
`;

export const ButtonForm = styled.button`
    ${palette.ButtonFormDefault}
    ${palette.Button}
    margin-top: 4rem;
    width: 26rem;
    height: 62px;
    @media ${palette.device.laptop} {
        margin: 0;
    }
`;
