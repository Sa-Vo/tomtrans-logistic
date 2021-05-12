import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, InputBox, ButtonForm } from './FormOrderStyled';

const FormOrder = () => {
    const { t } = useTranslation();

    return (
        <>
            <Form name="contact" method="post">
                <h3>{t('form.title')}</h3>
                <input type="hidden" name="form-name" value="contact" />
                <InputBox>
                    <input
                        type="text"
                        name="name"
                        required
                        autoComplete="off"
                    />
                    <label>{t('form.fullName')}</label>
                </InputBox>

                <InputBox>
                    <input
                        type="text"
                        name="phone"
                        required
                        autoComplete="off"
                    />
                    <label>{t('form.phone')}</label>
                </InputBox>

                <InputBox>
                    <input
                        type="text"
                        name="email"
                        required
                        autoComplete="off"
                    />
                    <label>{t('form.email')}</label>
                </InputBox>

                <InputBox>
                    <input
                        type="text"
                        name="pointStart"
                        required
                        autoComplete="off"
                    />
                    <label>{t('form.pointStart')}</label>
                </InputBox>

                <InputBox>
                    <input
                        type="text"
                        name="pointEnd"
                        required
                        autoComplete="off"
                    />
                    <label>{t('form.pointEnd')}</label>
                </InputBox>

                <InputBox>
                    <input
                        type="text"
                        name="product"
                        required
                        autoComplete="off"
                    />
                    <label>{t('form.goods')}</label>
                </InputBox>

                <ButtonForm type="submit">{t('btn.submit')}</ButtonForm>
            </Form>
        </>
    );
};

export default FormOrder;
