import styled from 'styled-components';
import {
    LocationWrappDef,
    LocationBoxDef,
    LocationInfoDef,
    BoxDef,
    ItemTextDef,
    SocialDef,
    SocialBoxDef,
    SocialItemDef,
    MapBoxDef,
} from '../../../../utils/LocationDefault';

export const LocationWrapp = styled.div`
    ${LocationWrappDef}
`;

export const LocationBox = styled.div`
    ${LocationBoxDef}
`;

export const LocationInfo = styled.div`
    ${LocationInfoDef}
`;

export const Box = styled.div`
    ${BoxDef}
`;
export const ItemText = styled.div`
    ${ItemTextDef}

    p {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const Social = styled.div`
    ${SocialDef}

    p {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const SocialBox = styled.div`
    ${SocialBoxDef}
`;

export const SocialItem = styled.div`
    ${SocialItemDef}
    a {
        color: #ffffff;
    }
`;

export const MapBox = styled.div`
    ${MapBoxDef}
`;
