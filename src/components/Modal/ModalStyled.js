import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ModalBox = styled.div`
    position: absolute;
    z-index: 2;
    top: 80%;
    left: 50%;
`;

export const ButtonModal = styled.button``;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
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
