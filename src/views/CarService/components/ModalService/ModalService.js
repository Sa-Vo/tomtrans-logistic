import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

    const { t } = useTranslation();

    return (
        <>
            <ModalBox>
                <ButtonModal onClick={openModal}>{t('btn.submitStatement')}</ButtonModal>

                <ModalContent
                    showModal={showModal}
                    setShowModal={setShowModal}
                ></ModalContent>
            </ModalBox>
        </>
    );
};

export default Modal;
