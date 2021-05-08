import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContent } from './ModalContent';
import FormOrder from '../../views/HomePage/components/FormOrder/FormOrder';
import { ModalBox, ButtonModal } from './ModalStyled';

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
                    formC={FormOrder}
                ></ModalContent>
            </ModalBox>
        </>
    );
};

export default Modal;
