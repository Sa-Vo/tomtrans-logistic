import React from 'react';
import {
    Form,
    InputBox,
    ButtonForm,
} from '../../../../views/HomePage/components/FormOrder/FormOrderStyled';
const FormService = () => (
    <>
        <Form name="carService" method="post" darkTheme>
            <h3>Швидка заявка</h3>
            <input type="hidden" name="form-name" value="contact" />
            <InputBox darkTheme>
                <input type="text" name="name" required autoComplete="off" />
                <label>ПІБ:</label>
            </InputBox>

            <InputBox darkTheme>
                <input type="text" name="phone" required autoComplete="off" />
                <label>Телефон</label>
            </InputBox>

            <InputBox darkTheme>
                <input type="text" name="email" required autoComplete="off" />
                <label>E-mail</label>
            </InputBox>

            <InputBox darkTheme>
                <input
                    type="text"
                    name="car"
                    required
                    autoComplete="off"
                />
                <label>Машина</label>
            </InputBox>

            <InputBox darkTheme>
                <input
                    type="text"
                    name="problem"
                    required
                    autoComplete="off"
                />
                <label>Проблема</label>
            </InputBox>

            <ButtonForm type="submit">Відправити</ButtonForm>
        </Form>
    </>
);

export default FormService;
