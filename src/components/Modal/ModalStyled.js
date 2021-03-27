import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import * as palette from '../../utils/VariablesStyled';

export const ModalBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: absolute;
`;

export const ButtonModal = styled.button`
    /* position: absolute; */
    width: 120px;
    height: 62px;
    font-size: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    ${palette.Button}
    z-index: 1;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
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
