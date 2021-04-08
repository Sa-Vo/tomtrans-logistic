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
    height: 6rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${white};
    border: solid 4px ${green};
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    background-color: ${green};

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

export const FornDefault = () => `
    box-shadow: ${shadow};
    border-radius: 20px;
    padding: 4.5rem 2rem 4.5rem;
    z-index: 3;

@media ${device.mobileL} {
    padding: 4.5rem 4rem 4.5rem;
}

@media ${device.tablet} {
    padding: 4.5rem 6rem 4.5rem;
}

h3 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
}
`;

export const InputBoxDefault = () => `
position: relative;

input {
    display: block;
    width: 100%;
    line-height: 25px;
    font-weight: 300;
    background: none;
    border-width: 0;
    transition: all 0.2s ease;

    &:focus {
        outline: 0;
    }
}

label {
    position: absolute;
    font-weight: 300;
    transform: translateY(-35px);
    transition: all 0.2s ease;
    pointer-events: none;
    color: #a1a5a9;
}

input:focus + label,
input:valid + label {
    transform: translateY(-60px);
    margin-left: -14px;
    font-size: 14px;
    font-weight: 400;
    outline: 0;
}
`;

export const ButtonFormDefault = () => `
    font-size: 15px;
    background-color: ${white};
`;

export const H_1 = '80px';
export const H_2 = '45px';
export const H_3 = '30px';
export const H_4 = '25px';
export const H_5 = '20px';

export const black = '#1a1a1a';
export const green = '#277a35';
export const white = '#ffffff';
export const darkThemeBg = '#2d2d2d';
export const darkThemeBgL = '#363636';

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
