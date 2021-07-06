import React, { useState } from 'react';
import {
    Main,
    DropDownContainer,
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem,
} from './Styled';

// import ua from '';
// import en from '';
import ru from '../../assets/ru.png';
console.log(ru);

const options = [
    {
        title: 'UA',
        img: '../../img/Service/service-tirparking-small.png',
    },

    {
        title: 'EN',
        img: { ru },
    },
];

export default function SelectLang() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value, img) => () => {
        setSelectedOption(value, img);
        console.log(img, 'IMGGGG');
        setIsOpen(false);
        console.log(selectedOption, 'selectedOption');
    };

    return (
        <Main>
            <DropDownContainer>
                <DropDownHeader onClick={toggling}>
                    <img src={selectedOption} alt="" />
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map(option => (
                                <ListItem
                                    onClick={onOptionClicked(
                                        option.img,
                                        option.title,
                                    )}
                                    key={Math.random()}
                                >
                                    <p>{option.title}</p>
                                    <img src={option.img} alt="" />
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </Main>
    );
}
