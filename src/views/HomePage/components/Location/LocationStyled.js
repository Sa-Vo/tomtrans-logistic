import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';

export const LocationBox = styled.div`
    display: block;
    @media ${palette.device.laptop} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4rem;
    }
`;
export const LocationInfo = styled.div`
    width: 50%;
`;

export const Social = styled.div`
    p {
        font-size: 2rem;
        color: gray;
        margin-bottom: 1rem;
    }
`;

export const SocialBox = styled.div`
    display: flex;
`;

export const SocialItem = styled.div`
    margin-right: 2rem;
    a {
        text-decoration: none;
        color: black;
        font-size: 4rem;
        transition: 0.5s;
        &:hover {
            color: ${palette.green};
            transition: 0.5s;
        }
    }
`;
export const Box = styled.div`
    display: flex;
    margin-bottom: 2rem;

    div {
        margin-right: 2rem;
        &:last-child {
            margin: 0;
        }
    }
`;
export const ItemText = styled.div`
    margin-bottom: 2rem;
    &:last-child {
        margin: 0;
    }

    p {
        font-size: 2rem;
        color: gray;
        margin-bottom: 1rem;
        &:last-child {
            font-weight: 500;
            color: ${palette.green};
            margin: 0;
        }
    }
`;
export const Map = styled.div`
    width: 50%;
    div {
        height: 50rem;
        background-color: #a09d9d;
    }
`;
