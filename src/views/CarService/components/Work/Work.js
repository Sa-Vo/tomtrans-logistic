import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { languageCodeOnly } from '../../../../service/i18n';

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

const Work = () => {
    const { t, i18n } = useTranslation();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`/data/howWeWork/${languageCodeOnly(i18n.language)}.json`)
            .then(response => response.json())
            .then(json => setItems(json));
    }, [i18n.language]);

    return items.length === 0 ? (
        <p>Loading...</p>
    ) : (
        <WorkBox>
            <WorkInfo>
                <h2>{t('howWeWork.title')}</h2>

                <SubText>
                    <p>{t('howWeWork.decrOne')}</p>
                    <p>{t('howWeWork.decrTwo')}</p>
                </SubText>
                <Link to="formProblem" spy={true} smooth={true} duration={500}>
                    <ButtonForm>{t('howWeWork.btn')}</ButtonForm>
                </Link>
            </WorkInfo>
            <StepsBox>
                {items.map(item => (
                    <StepItem key={item.id}>
                        <Box>
                            <StepCount>{item.number}</StepCount>
                            <StepTitle>{item.title}</StepTitle>
                        </Box>
                        <Line>
                            <StepInfo>{item.text}</StepInfo>
                        </Line>
                    </StepItem>
                ))}
            </StepsBox>
        </WorkBox>
    );
};

export default Work;
