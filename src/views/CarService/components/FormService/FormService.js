import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Form, InputBox, MoreInfo, ButtonForm } from './FormServiceStyled';

const FormService = () => {
    const { t } = useTranslation();

    return (
        <>
            <Form name="formService" method="post">
                <h3>{t('form.title')}</h3>
                <Box>
                    <div>
                        <input
                            type="hidden"
                            name="form-name"
                            value="formService"
                        />
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
                                name="carService"
                                required
                                autoComplete="off"
                            />
                            <label>{t('form.car')}</label>
                        </InputBox>
                    </div>

                    <MoreInfo
                        type="text"
                        name="problemService"
                        required
                        autoComplete="off"
                        placeholder={t('form.describeProblem')}
                    ></MoreInfo>
                </Box>

                <ButtonForm type="submit">{t('btn.submit')}</ButtonForm>
            </Form>
        </>
    );
};

export default FormService;
