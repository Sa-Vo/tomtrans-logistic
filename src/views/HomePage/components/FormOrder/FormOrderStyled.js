import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const HeaderText = styled.div`
    padding-top: 30rem;
    width: 25rem;
    margin: 0 auto;
    text-align: center;

    div {
        padding: 1rem;
        z-index: 9;
        border-radius: 5px;
        color: white;
        background-color: #80808090;
    }
    @media (min-width: 425px) and (max-width: 1023px) {
        width: 30rem;
        h2 {
            font-size: 4rem;
        }
        p {
            font-size: 3rem;
        }
    }

    @media ${palette.device.laptop} {
        position: absolute;
        top: 30%;
        left: 10%;
        h2 {
            font-size: 4rem;
        }
        p {
            font-size: 3rem;
        }
    }
`;

export const Form = styled.form`
    /* top: 25%;
    left: 59%;
    position: absolute; */
    padding: 45px 71px 45px;
    background: ${palette.white};
    border-radius: 20px;
    z-index: 2;
    box-shadow: ${palette.shadow};
    /* top: 18%;
    left: 9%;
    padding: 30px;
    position: absolute;
    background: ${palette.white};
    border-radius: 20px;
    z-index: 2;
    box-shadow: ${palette.shadow};

    @media ${palette.device.mobileL} {
        left: 14%;
    }

    @media ${palette.device.mobileL} {
        left: 14.5%;
    }

    @media ${palette.device.tablet} {
        left: 50%;
    } */

    /* h3 {
        position: relative;
        z-index: 5;
        margin: 0 0 20px;
        text-align: center;
        color: ${palette.black};
        font-size: 20px;
    } */
`;

export const InputBox = styled.div`
    position: relative;
    margin-bottom: 44px;
    width: 250px;

    input {
        display: block;
        width: 100%;
        line-height: 25px;
        font-size: 25px;
        font-weight: 300;
        background: none;
        border-width: 0;
        border-bottom: 3px solid #a1a5a9;
        transition: all 0.2s ease;

        &:focus {
            outline: 0;
            border-color: ${palette.green};
        }
    }

    label {
        position: absolute;
        left: 13px;
        font-size: 20px;
        font-weight: 300;
        transform: translateY(-35px);
        transition: all 0.2s ease;
        pointer-events: none;
        color: #a1a5a9;
    }

    input:focus + label,
    input:valid + label {
        transform: translateY(-60px);
        margin-left: -14px;
        font-size: 14px;
        font-weight: 400;
        outline: 0;
        color: ${palette.black};
    }
`;

export const ButtonForm = styled.button`
    border-radius: 9px;
    background-color: ${palette.white};
    width: 120px;
    height: 62px;
    font-size: 15px;
    color: ${palette.black};
    border: solid 2px ${palette.green};
    cursor: pointer;
    outline: none;
    transition: all 0.7s;

    &:hover {
        transition: all 0.3s;
        color: ${palette.white};
        background-color: ${palette.green};
        transform: translateY(-1px);
    }
    &::active {
        transform: translateY(-3px);
    }
`;
