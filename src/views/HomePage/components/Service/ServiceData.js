import SlideLogLarge from '../../../../assets/service-logistics.png';
import SlideParkingLarge from '../../../../assets/service-tirparking.png';
import SlideCarServiceLarge from '../../../../assets/service-carservice.png';
import SlideHostelLarge from '../../../../assets/service-hostel.png';

import SlideLogSmall from '../../../../assets/ServiceSmall/service-logistics-small.png';
import SlideParkingSmall from '../../../../assets/ServiceSmall/service-logistics-small.png';
import SlideCarServiceSmall from '../../../../assets/ServiceSmall/service-logistics-small.png';
import SlideHostelSmall from '../../../../assets/ServiceSmall/service-logistics-small.png';

const ServiceData = [
    {
        id: 0,
        title: 'Логістика',
        imgSmall: `${SlideLogSmall}`,
        imgLarge: `${SlideLogLarge}`,
    },

    {
        id: 1,
        title: 'Автосервіс',
        imgSmall: `${SlideParkingSmall}`,
        imgLarge: `${SlideParkingLarge}`,
    },

    {
        id: 2,
        title: 'Автосервіс',
        imgSmall: `${SlideCarServiceSmall}`,
        imgLarge: `${SlideCarServiceLarge}`,
    },

    {
        id: 3,
        title: 'Хостел',
        imgSmall: `${SlideHostelSmall}`,
        imgLarge: `${SlideHostelLarge}`,
    },
];

export default ServiceData;
