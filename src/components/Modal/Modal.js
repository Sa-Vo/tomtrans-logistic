import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalContent } from './ModalContent';
import { ModalBox, ButtonModal } from './ModalStyled';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <ModalBox>
                <ButtonModal onClick={openModal}>Подати заявку</ButtonModal>
                <ModalContent
                    showModal={showModal}
                    setShowModal={setShowModal}
                ></ModalContent>
            </ModalBox>
        </>
    );
};

export default Modal;
