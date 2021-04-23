import SlideLogLarge from '../../../../assets/service-logistics.png';
import SlideParkingLarge from '../../../../assets/service-tirparking.png';
import SlideCarServiceLarge from '../../../../assets/service-carservice.png';
import SlideHostelLarge from '../../../../assets/service-hostel.png';

import SlideLogSmall from '../../../../assets/ServiceSmall/service-logistics-small.png';
import SlideParkingSmall from '../../../../assets/ServiceSmall/service-tirparking-small.png';
import SlideCarServiceSmall from '../../../../assets/ServiceSmall/service-carservice-small.png';
import SlideHostelSmall from '../../../../assets/ServiceSmall/service-hostel-small.png';

const ServiceData = [
    {
        id: 0,
        title: 'Логістика',
        imgSmall: `${SlideLogSmall}`,
        imgLarge: `${SlideLogLarge}`,
        src: '/',
    },

    {
        id: 1,
        title: 'TIR Parking',
        imgSmall: `${SlideParkingSmall}`,
        imgLarge: `${SlideParkingLarge}`,
        src: '/tir-parking',
    },

    {
        id: 2,
        title: 'Автосервіс',
        imgSmall: `${SlideCarServiceSmall}`,
        imgLarge: `${SlideCarServiceLarge}`,
        src: '/car-service',
    },

    {
        id: 3,
        title: 'Хостел',
        imgSmall: `${SlideHostelSmall}`,
        imgLarge: `${SlideHostelLarge}`,
        src: '/hostel',
    },
];

export default ServiceData;
