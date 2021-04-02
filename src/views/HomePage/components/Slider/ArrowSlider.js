import React from 'react';
import styled from 'styled-components';
import * as palette from '../../../../utils/VariablesStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ArrowBox = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;
const ArrowItem = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 3rem;
    box-shadow: ${palette.shadow};
    transition: 0.5s;
    &:hover {
        svg {
            transition: 0.5s;
            color: ${palette.green};
        }
    }
    &:last-child {
        margin: 0;
    }
    @media ${palette.device.laptopL} {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
    }
    svg {
        display: block;
        font-size: 3rem;
        margin: 1rem auto;
    }
    &:first-child {
        left: -6rem;
    }

    &:last-child {
        right: -6rem;
    }
`;

class ArrowSlider extends React.Component {
    render() {
        const { next, prev } = this.props;
        return (
            <ArrowBox>
                <ArrowItem onClick={prev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </ArrowItem>

                <ArrowItem onClick={next}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </ArrowItem>
            </ArrowBox>
        );
    }
}

export default ArrowSlider;
