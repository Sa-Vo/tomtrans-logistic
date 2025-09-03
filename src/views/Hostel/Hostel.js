import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'antd';
import { Helmet } from 'react-helmet';
import { HostelPage } from './HostelStyled';
import TitleTextBox from './TitleTextBox';
import styled from 'styled-components';
import Gallery from '../HomePage/components/Gallery/Gallery';

import HostelSlide1 from '../../assets/gallery/hostel-slide1.jpg';
import HostelSlide2 from '../../assets/gallery/hostel-slide2.jpg';

const CarouselWrapp = styled.div`
    padding-top: 15rem;
    padding-bottom: 0px;!important
`;

const data =  [{
    img: HostelSlide1,
},{
    img: HostelSlide2,
},]

const Hostel = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('link.hostel')}</title>
            </Helmet>

            <HostelPage>
            <CarouselWrapp>
            <Gallery data={data}/>
            <section>
                    <TitleTextBox />
                </section>
            </CarouselWrapp>
               
            </HostelPage>
        </>
    );
};

export default Hostel;
