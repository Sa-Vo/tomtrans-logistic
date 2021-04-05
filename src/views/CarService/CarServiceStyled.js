import styled from 'styled-components';
import { MainImgPage } from '../../utils/VariablesStyled';
import imgHome from '../../assets/CarService.png';
import bgImg from '../../assets/bg-D.png';

export const CarServPage = styled.main`
    background-image: url(${bgImg});
`;

export const CarServSlide = styled.section`
    ${MainImgPage}
    background-image: url(${imgHome});
`;
