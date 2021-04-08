import styled from 'styled-components';
import {
    FornDefault,
    InputBoxDefault,
    Button,
    ButtonFormDefault,
    green,
    black,
    darkThemeBg,
    white,
} from '../../../../utils/VariablesStyled';

// style main slide
// export const HeaderText = styled.div`
//     padding-top: 30rem;
//     width: 25rem;
//     margin: 0 auto;
//     text-align: center;

//     div {
//         padding: 1rem;
//         z-index: 9;
//         border-radius: 5px;
//         color: white;
//         background-color: #80808090;
//     }
//     @media (min-width: 425px) and (max-width: 1023px) {
//         width: 30rem;
//         h2 {
//             font-size: 4rem;
//         }
//         p {
//             font-size: 3rem;
//         }
//     }

//     @media ${palette.device.laptop} {
//         position: absolute;
//         top: 30%;
//         left: 10%;
//         h2 {
//             font-size: 4rem;
//         }
//         p {
//             font-size: 3rem;
//         }
//     }
// `;

export const Form = styled.form`
    ${FornDefault};
    background-color: ${darkThemeBg};
    color: ${white};
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const InputBox = styled.div`
    ${InputBoxDefault}
    margin-bottom: 4.4rem;
    width: 50rem;

    input {
        font-size: 2rem;
        border-bottom: 3px solid #a1a5a9;

        &:focus {
            outline: 0;
            border-color: ${green};
        }
    }

    label {
        left: 1.3rem;
        font-size: 2rem;
    }

    input:focus + label,
    input:valid + label {
        color: ${black};
    }
`;

export const MoreInfo = styled.textarea`
    width: 50%;
    height: 30rem;
    font-size: 3rem;
    border-radius: 10px;
    border: 3px solid gray;
    background-color: rgba(255, 255, 255, 0.712);
    transition: 0.5s all;

    &:focus {
        outline: none;
        border: 3px solid ${green};
    }
`;

export const ButtonForm = styled.button`
    ${ButtonFormDefault}
    ${Button}
    width: 26rem;
    height: 62px;
`;
