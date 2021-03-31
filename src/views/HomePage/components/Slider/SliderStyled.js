import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const Slider = styled.div`
    max-width: 1300px;
    /* width: 100%; */
    min-height: 30rem;
    top: 50%;
    position: relative;
    /* margin: 100px auto; */
    padding: 2rem;
`;

export const ArrowBox = styled.div`
    display: block;
    margin: auto;
    width: 2rem;
    height: 2rem;
`;

export const PrevArrow = styled.div`
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    box-shadow: ${palette.shadow};
    &:hover {
        background-color: rgb(64, 179, 70);
        transition: 0.5s;
    }
`;

export const NextArrow = styled.div`
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    box-shadow: ${palette.shadow};
    &:hover {
        background-color: rgb(64, 179, 70);
        transition: 0.5s;
    }
`;

export const SliderBox = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
    box-shadow: ${palette.shadow};
    border-radius: 20px;
    background-color: white;
`;

export const Card = styled.div`
    min-width: 100%;
    @media ${palette.device.laptop} {
        display: flex;
    }
`;

export const SLiderImgBox = styled.div`
    padding: 5rem 2rem;
    margin: auto;

    @media ${palette.device.laptop} {
        width: 70%;
    }
    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }
`;

export const SliderInfoBox = styled.div`
    padding: 2rem 2rem 0 2rem;
    background-color: #f4f4f4;
    display: block;
    height: 100%;
    @media ${palette.device.tablet} {
        display: flex;
        /* justify-content: space-between; */
    }

    @media ${palette.device.laptop} {
        width: 30%;
        display: block;
    }
`;

export const ContentBox = styled.div`
    @media ${palette.device.tablet} {
        width: 70%;
    }
    @media ${palette.device.laptop} {
        width: 100%;
    }
`;

export const SliderTitle = styled.h5`
    font-weight: 400;
    font-size: 2.5rem;
    @media ${palette.device.laptop} {
        font-size: 3rem;
    }
`;

export const SLiderSubText = styled.p`
    margin-bottom: 10px;
    font-size: 1.5rem;
`;

export const SizeBox = styled.div`
    margin: 0;
    @media ${palette.device.tablet} {
        width: 30%;
    }
    @media ${palette.device.laptop} {
        width: 100%;
        margin-top: 3rem;
    }
`;

export const SizeBoxItem = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 20rem;
    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        &:last-child {
            color: grey;
        }
        @media ${palette.device.laptop} {
            font-size: 1.8rem;
            &:last-child {
                color: gray;
            }
        }
    }
`;
