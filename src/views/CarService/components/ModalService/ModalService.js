import React, { useState } from 'react';
import { ModalContent } from './ModalServiceContent';
import {
    ModalBox,
    ButtonModal,
} from '../../../../components/Modal/ModalStyled';

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
