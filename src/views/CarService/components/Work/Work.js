import React from 'react';
import { Link } from 'react-scroll';
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
    ButtonForm,
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
                            Ми цінуємо кожного клієнта та надаємо якісний сервіс
                            в Чернівцях
                        </p>
                        <p>
                            Тому ось декілька пунктів, щоб ви могли легко
                            дізнатись як ми працюємо, для того щоб здати машину
                            на ремонт в наш сервіс.
                        </p>
                    </SubText>
                    <Link
                        to="formProblem"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <ButtonForm>Записатись</ButtonForm>
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
