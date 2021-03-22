import styled from 'styled-components';
import * as palette from '../../utils/VariablesStyled';

export const Slider = styled.div`
    display: flex;
    align-items: center;
    svg {
        width: 50px;
        height: 50px;
        margin: 0 20px;
        transition: all 0.5s;

        &:hover {
            transition: all 0.5s;
            color: green;
            cursor: pointer;
        }
    }
`;

export const SliderItem = styled.div`
    display: block;

    @media ${palette.device.laptop} {
        display: flex;
    }
`;

export const SliderImgBox = styled.div`
    padding: 50px 20px;
    background-color: white;
`;

export const SliderInfoBox = styled.div`
    background-color: #afafaf;
    padding: 20px;
    display: flex;
    p {
        font-size: 20px;
    }
    @media ${palette.device.laptop} {
        display: block;
    }
`;

export const SliderTitle = styled.h6`
    font-size: 30px;
    font-weight: 500;
`;

export const SliderSizeBox = styled.div`
    width: 50%;
    div {
        display: flex;
    }

    @media ${palette.device.laptop} {
        margin-top: 20px;
        width: 100%;
    }
`;