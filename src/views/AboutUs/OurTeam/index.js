import React from 'react';
import { useTranslation } from 'react-i18next';
import { TeamSection, TeamList, TeamMember } from './OurTeamStyled';
import dataTeam from './OurTeamData';

const OurTeam = () => {
    const { t } = useTranslation();

    return (
        <TeamSection>
            <h2>{t('aboutUsPage.ourTeamTitle')}</h2>

            <TeamList>
                {dataTeam.map(({ imgSrc, altKey,nameKey }) => (
                    <TeamMember>
                        <img src={imgSrc} alt={altKey} />
                        <h1>{t(nameKey)}</h1>
                        <p>{t(altKey)}</p>
                    </TeamMember>
                ))}
            </TeamList>
        </TeamSection>
    );
};

export default OurTeam;
