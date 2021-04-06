import React from 'react';
import Modal from '../../../../components/Modal/Modal';
import {
    WorkBox,
    WorkInfo,
    StepsBox,
    StepItem,
    StepCount,
    StepTitle,
    StepInfo,
} from './WorkStyled';

class Work extends React.Component {
    render() {
        const { title, workData } = this.props;
        return (
            <WorkBox>
                <WorkInfo>
                    <h2>{title}</h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, ipsa?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae deleniti exercitationem ipsam repellat
                        animi! Eius ducimus nam commodi odio possimus!
                    </p>

                    <button>Записатись</button>
                </WorkInfo>
                <StepsBox>
                    {workData.map(info => (
                        <StepItem key={info.id}>
                            <StepCount>{info.number}</StepCount>
                            <StepTitle>{info.title}</StepTitle>
                            <StepInfo>{info.text}</StepInfo>
                        </StepItem>
                    ))}
                </StepsBox>
            </WorkBox>
        );
    }
}

export default Work;
