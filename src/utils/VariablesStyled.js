export const MainImgPage = props => `
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`;

export const Wrapper = props => `
    max-width: 1300px;
    margin: 0 auto;
`;

export const Button = () => `
    border-radius: 9px;
    color: ${black};
    border: solid 2px ${green};
    cursor: pointer;
    outline: none;
    transition: all 0.7s;

    &:hover {
        transition: all 0.3s;
        color: ${white};
        background-color: ${green};
        transform: translateY(-1px);
    }
    &::active {
        transform: translateY(-3px);
    }
`;

export const H_1 = '80px';
export const H_2 = '45px';
export const H_3 = '30px';
export const H_4 = '25px';
export const H_5 = '20px';

export const black = '#1a1a1a';
export const green = '#277a35';
export const white = '#ffffff';

export const shadow = '9.057px 7.873px 30.4px 1.6px rgba(0, 0, 0, 0.24)';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};
