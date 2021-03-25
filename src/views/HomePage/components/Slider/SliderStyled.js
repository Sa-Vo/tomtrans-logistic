import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const Slider = styled.div`
    display: flex;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    min-height: 30rem;
    /* position: absolute; */
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
    margin: 100px auto;
    /* padding: 10 0rem; */
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
    &:hover{
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
    &:hover{
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
    overflow: hidden;
    display: block;

    @media ${palette.device.laptop} {
        display: flex;
    }
`;

export const SLiderImgBox = styled.div`
    padding: 5rem 2rem;
    margin: auto;

    @media ${palette.device.laptop} {
        width: 65%;
    }
    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }
`;

export const SliderInfoBox = styled.div`
    padding: 3rem 2rem;
    background-color: #f4f4f4;
    display: flex;

    @media ${palette.device.laptop} {
        width: 35%;
        display: block;
    }
`;

export const SliderTitle = styled.h5`
    font-size: 3rem;
`;

export const SLiderSubText = styled.p`
    margin-bottom: 10px;
    font-size: 2rem;
`;

export const SizeBox = styled.div`
    margin: 0;
    @media ${palette.device.laptop} {
        margin-top: 3rem;
    }
`;

export const SizeBoxItem = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 200px;
    p {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;

// export const Slider = styled.div`
//     display: flex;
//     align-items: center;
// `;

// export const SliderItem = styled.div`
//     display: block;

//     @media ${palette.device.laptop} {
//         display: flex;
//     }
// `;

// export const SliderImgBox = styled.div`
//     padding: 50px 20px;
//     background-color: white;
// `;

// export const SliderInfoBox = styled.div`
//     background-color: #afafaf;
//     padding: 20px;
//     display: flex;
//     p {
//         font-size: 20px;
//     }
//     @media ${palette.device.laptop} {
//         display: block;
//     }
// `;

// export const SliderTitle = styled.h6`
//     font-size: 30px;
//     font-weight: 500;
// `;

// export const SliderSizeBox = styled.div`
//     width: 50%;
//     div {
//         display: flex;
//     }

//     @media ${palette.device.laptop} {
//         margin-top: 20px;
//         width: 100%;
//     }
// `;
