import React from 'react';
import styled from 'styled-components';
import { MainImgPage } from '../../utils/VariablesStyled';
import imgHome from '../../assets/Home.png';

const AboutSlide = styled.section`
    ${MainImgPage}
    background-image: url(${imgHome});
`;

const AboutUs = () => (
    <>
        <AboutSlide />
        <h1>About Us</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            a. Accusantium nostrum quaerat culpa, quasi ipsum nobis corporis
            mollitia sequi magnam dolor veritatis tempora eveniet animi! Ducimus
            ea aut est recusandae, quam accusantium dicta obcaecati.
        </p>
    </>
);

export default AboutUs;
