import React from 'react';
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import {
    WorkBox,
    WorkInfo,
    SubText,
    StepsBox,
    StepItem,
    StepCount,
    StepTitle,
    StepInfo,
    Box,
    Line,
} from './WorkStyled';

class Work extends React.Component {
    render() {
        const { title, workData } = this.props;
        return (
            <WorkBox>
                <WorkInfo>
                    <h2>{title}</h2>

                    <SubText>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero, ipsa?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae deleniti exercitationem ipsam
                            repellat animi! Eius ducimus nam commodi odio
                            possimus!
                        </p>
                    </SubText>
                    <Link
                        activeClass="active"
                        className="test2"
                        to="test2"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button>Записатись</button>
                    </Link>
                </WorkInfo>
                <StepsBox>
                    {workData.map(info => (
                        <StepItem key={info.id}>
                            <Box>
                                <StepCount>{info.number}</StepCount>
                                <StepTitle>{info.title}</StepTitle>
                            </Box>
                            <Line>
                                <StepInfo>{info.text}</StepInfo>
                            </Line>
                        </StepItem>
                    ))}
                </StepsBox>
            </WorkBox>
        );
    }
}

export default Work;
