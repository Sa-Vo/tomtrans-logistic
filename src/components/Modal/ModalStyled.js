import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Button } from '../../utils/VariablesStyled';
import * as palette from '../../utils/VariablesStyled';

export const ModalBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
`;

export const ButtonModal = styled.button`
    font-size: 2.5rem;
    ${Button}
    position: absolute;
    min-width: 16.7rem;

    top: 75%;
    background-color: rgba(21, 21, 21, 0.8);

    @media ${palette.device.tablet} {
        left: 13%;
    }
    @media ${palette.device.laptopL} {
        left: 17%;
    }
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

export const ModalContentBox = styled.div``;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;
