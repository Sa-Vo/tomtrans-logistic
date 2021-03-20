import styled from 'styled-components';

export const Form = styled.form`
    top: 25%;
    left: 59%;
    position: absolute;
    padding: 45px 71px 45px;
    background: white;
    border-radius: 20px;
    z-index: 2;
    box-shadow: 9.057px 7.873px 30.4px 1.6px rgba(0, 0, 0, 0.24);

    h3 {
        position: relative;
        z-index: 5;
        margin: 0 0 20px;
        text-align: center;
        color: #1a1a1a;
        font-size: 30px;
    }
`;

export const InputBox = styled.div`
    position: relative;
    margin-bottom: 44px;
    width: 350px;

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
            border-color: #277a35;
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
        color: #1a1a1a;
    }
`;

export const ButtonForm = styled.button`
    border-radius: 9px;
    background-color: #fff;
    width: 349px;
    height: 62px;
    font-size: 29px;
    color: #1a1a1a;
    border: solid 2px #277a35;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;

    &:hover {
        transition: all 0.3s;
        color: #fff;
        background-color: #277a35;
        transform: translateY(-1px);
    }
    &::active {
        transform: translateY(-3px);
    }
`;
