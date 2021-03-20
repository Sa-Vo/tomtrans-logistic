import React from 'react';
import { Form, InputBox, ButtonForm } from './FormOrderStyled';
const FormOrder = () => (
    <>
        <Form name="contact" method="post">
            <h3>Швидка заявка</h3>
            <input type="hidden" name="form-name" value="contact" />
            <InputBox>
                <input type="text" name="name" required autoComplete="off" />
                <label>ПІБ:</label>
            </InputBox>

            <InputBox>
                <input type="text" name="phone" required autoComplete="off" />
                <label>Телефон</label>
            </InputBox>

            <InputBox>
                <input type="text" name="email" required autoComplete="off" />
                <label>E-mail</label>
            </InputBox>

            <InputBox>
                <input
                    type="text"
                    name="pointStart"
                    required
                    autoComplete="off"
                />
                <label>Пункт відправлення:</label>
            </InputBox>

            <InputBox>
                <input
                    type="text"
                    name="pointEnd"
                    required
                    autoComplete="off"
                />
                <label>Пункт Доставки</label>
            </InputBox>

            <InputBox>
                <input type="text" name="product" required autoComplete="off" />
                <label>Товар</label>
            </InputBox>

            <ButtonForm type="submit">Відправити</ButtonForm>
        </Form>
    </>
);

export default FormOrder;
