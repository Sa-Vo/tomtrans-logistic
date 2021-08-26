import styled from 'styled-components';
import * as palette from '../../../utils/VariablesStyled';

export const AwardsSection = styled.section`
    h2 {
        text-align: center;
        padding: 2rem 0;

        @media ${palette.device.mobileS} {
            font-size: 3rem;
            padding: 1rem 0;
        }

        @media ${palette.device.tablet} {
            font-size: 5rem;
        }
    }
`;

export const AwardsList = styled.ul`
    list-style: none;

    @media ${palette.device.mobileS} {
        padding: 0 1rem;
    }
`;

export const AwardsItem = styled.li`
    max-width: 70rem;
    margin: 0 auto 2rem;

    &:last-child {
        margin: 0 auto;
    }

    @media ${palette.device.mobileS} {
        min-width: 30rem;
    }
`;
