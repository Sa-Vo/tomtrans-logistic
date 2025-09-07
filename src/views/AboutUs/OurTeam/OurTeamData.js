import { useTranslation } from 'react-i18next';
import Accountant from '../../../../src/assets/OurTeam/acc.jpg';
import Accountant2 from '../../../../src/assets/OurTeam/acc2.jpg';
import Chef from '../../../../src/assets/OurTeam/chef.jpg';
import Director from '../../../../src/assets/OurTeam/director.jpg';
import Lawyer from '../../../../src/assets/OurTeam/law.jpg';
import ManagerLogistic from '../../../../src/assets/OurTeam/manager-logist.jpg';
import Mechanic from '../../../../src/assets/OurTeam/mechanic.jpg';
import Service from '../../../../src/assets/OurTeam/service.jpg';

const OurTeam = [
    {
        imgSrc: Director,
        nameKey: 'aboutUsPage.chef.name',
        altKey: 'aboutUsPage.chef.role',
    },
    {
        imgSrc: Chef,
        nameKey: 'aboutUsPage.ceo.name',
        altKey: 'aboutUsPage.ceo.role',
    },
    {
        imgSrc: Lawyer,
        nameKey: 'aboutUsPage.law.name',
        altKey: 'aboutUsPage.law.role',
    },
    {
        imgSrc: Accountant,
        nameKey: 'aboutUsPage.acc.name',
        altKey: 'aboutUsPage.acc.role',
    },
    {
        imgSrc: Accountant2,
        nameKey: 'aboutUsPage.acc2.name',
        altKey: 'aboutUsPage.acc2.role',
    },

    {
        imgSrc: ManagerLogistic,
        nameKey: 'aboutUsPage.manager-logist.name',
        altKey: 'aboutUsPage.manager-logist.role',
    },
    {
        imgSrc: Mechanic,
        nameKey: 'aboutUsPage.mech.name',
        altKey: 'aboutUsPage.mech.role',
    },
    {
        imgSrc: Service,
        nameKey: 'aboutUsPage.service.name',
        altKey: 'aboutUsPage.service.role',
    },
];

export default OurTeam;
