import Map from '../../../../src/assets/AboutUs/CoverageMap.png';
import { useTranslation } from 'react-i18next';
import { MapSection, MapBox,  } from './CoverageMapStyled';


const CoverageMap = () =>{
    const { t } = useTranslation();

    return(
        <MapSection>
            <h2>{t('aboutUsPage.CoverageMapTitle')}</h2>
        <MapBox>
             <img src={Map}/>
        </MapBox>
        </MapSection>
        
    );
}

export default CoverageMap;