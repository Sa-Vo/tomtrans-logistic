import React from 'react';
import { Box, Form, InputBox, MoreInfo, ButtonForm } from './FormServiceStyled';
const FormService = () => (
    <>
        <Form name="formService" method="post">
            <h3>Швидка заявка</h3>
            <Box>
                <div>
                    <input type="hidden" name="form-name" value="formService" />
                    <InputBox>
                        <input
                            type="text"
                            name="name"
                            required
                            autoComplete="off"
                        />
                        <label>ПІБ</label>
                    </InputBox>

                    <InputBox>
                        <input
                            type="text"
                            name="phone"
                            required
                            autoComplete="off"
                        />
                        <label>Телефон</label>
                    </InputBox>

                    <InputBox>
                        <input
                            type="text"
                            name="email"
                            required
                            autoComplete="off"
                        />
                        <label>E-mail</label>
                    </InputBox>

                    <InputBox>
                        <input
                            type="text"
                            name="carService"
                            required
                            autoComplete="off"
                        />
                        <label>Машина</label>
                    </InputBox>
                </div>

                <MoreInfo
                    type="text"
                    name="problemService"
                    required
                    autoComplete="off"
                    placeholder="Опишіть проблему:"
                ></MoreInfo>
            </Box>

            <ButtonForm type="submit">Відправити</ButtonForm>
        </Form>
    </>
);

export default FormService;
