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
        color: rgba(94, 94, 94, 0.5);
    }
`;

export const Social = styled.div`
    ${SocialDef}

    p {
        color: rgba(94, 94, 94, 0.5);
    }
`;

export const SocialBox = styled.div`
    ${SocialBoxDef}
`;

export const SocialItem = styled.div`
    ${SocialItemDef}
    width: 50px;
    height: 50px;
    shape-outside: circle();
    clip-path: circle();
    background-color: #111111;
    box-shadow: 9.057px 7.873px 30.4px 1.6px rgba(0, 0, 0, 0.24);
    a {
        color: #4c4c4c;
    }
`;

export const MapBox = styled.div`
    ${MapBoxDef}
`;
