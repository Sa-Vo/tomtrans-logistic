import styled from 'styled-components';
import { MainImgPage } from '../../utils/VariablesStyled';
import imgHomePhone from '../../assets/CarServicePhone.webp';
import imgHome from '../../assets/CarService.png';
import bgImg from '../../assets/bg-D.png';

export const CarServPage = styled.main`
    background-image: url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 6rem;
`;

export const CarServSlide = styled.section`
    ${MainImgPage}
    margin-bottom: 7rem;
    background-image: url(${imgHomePhone});

    @media (min-width: 1024px) {
        background-image: url(${imgHome});
    }
`;
