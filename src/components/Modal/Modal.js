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
            <div>
                <ModalBox>
                    <ButtonModal onClick={openModal}>MODAL</ButtonModal>
                    <ModalContent
                        showModal={showModal}
                        setShowModal={setShowModal}
                    ></ModalContent>
                </ModalBox>
            </div>
        </>
    );
};

export default Modal;
