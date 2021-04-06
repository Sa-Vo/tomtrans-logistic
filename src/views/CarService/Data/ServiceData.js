import document from '../../../assets/ServiceIco/document.png';
import engine from '../../../assets/ServiceIco/engine.png';
import suspension from '../../../assets/ServiceIco/suspension.png';
import comDiagnostics from '../../../assets/ServiceIco/com-diagnostics.png';
import gasoline from '../../../assets/ServiceIco/gasoline.png';
import brakeDisc from '../../../assets/ServiceIco/brake-disc.png';

const ServiceData = [
    {
        id: 0,
        title: 'Підбір запчастин',
        ico: `${document}`,
    },

    {
        id: 1,
        title: 'Обслуговування двигуна',
        ico: `${engine}`,
    },

    {
        id: 2,
        title: 'Ремонт ходової',
        ico: `${suspension}`,
    },

    {
        id: 3,
        title: 'Компютерна діангостика',
        ico: `${comDiagnostics}`,
    },

    {
        id: 4,
        title: 'Заміна масла',
        ico: `${gasoline}`,
    },

    {
        id: 5,
        title: 'Обслуговування гальмівної сист.',
        ico: `${brakeDisc}`,
    },
];

export default ServiceData;
