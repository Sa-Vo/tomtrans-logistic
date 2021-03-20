import styled from 'styled-components';
import { MainImgPage } from '../../utils/VariablesStyled';
import imgHome from '../../assets/Home.png';

export const HomeSlide = styled.section`
    ${MainImgPage}
    background-image: url(${imgHome});
`;

