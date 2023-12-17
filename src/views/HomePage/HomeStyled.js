import styled from 'styled-components';
import { MainImgPage } from '../../utils/VariablesStyled';
import imgHome from '../../assets/Home.png';
import bgImg from '../../assets/bg-L.webp';

export const HomePage = styled.main`
    background-image: url(${bgImg});
    padding-bottom: 4rem;
`;

export const HomeSlide = styled.section`
    ${MainImgPage}
    /* background-image: url(${imgHome}); */
`;
