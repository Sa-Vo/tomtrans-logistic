import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

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
        color: ${palette.black};
    }
`;

export const MoreInfo = styled.textarea`
    width: 100%;
    height: 30rem;
    font-size: 3rem;
    border-radius: 10px;
    border: 3px solid gray;
    background-color: rgba(255, 255, 255, 0.712);
    transition: 0.5s all;

    @media ${palette.device.laptop} {
        width: 50%;
    }

    &:focus {
        outline: none;
        border: 3px solid ${palette.green};
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
