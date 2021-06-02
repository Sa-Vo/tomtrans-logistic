import styled from 'styled-components';
import { MainImgPage } from '../../utils/VariablesStyled';
import AboutUsBg from '../../assets/AboutUsBg.png';
import bgImg from '../../assets/bg-L.webp';

export const AboutUsPage = styled.main`
    background-image: url(${bgImg});
    padding-bottom: 4rem;
`;

export const AboutUsSlide = styled.section`
    ${MainImgPage}
    background-image: url(${AboutUsBg});
`;
