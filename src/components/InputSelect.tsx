import React, {useState} from 'react';
import { inputSelectProps } from '../types/jokeTypes';
import  './InputSelect.scss';
import chevronDown from '../assets/icons/chevron-down.svg';

const InputSelect: React.FC<inputSelectProps> = (props) => {
    const { categories, category } = props;
    const [ toggleDropDown, setToggleDropDown ] = useState<boolean>(false);

    const handleSelect = () => {
        setToggleDropDown(!toggleDropDown)
    }

    console.log(categories, category, 'categories')
    return (
        <div className="InputSelect">
            <button 
                className="InputSelect__select-button"
                onClick={handleSelect}
            >
                <p className="InputSelect__select-text">
                    Filter <span className="InputSelect__category-name"> {category} </span> fields 
                    <img className="InputSelect__chevron" src={chevronDown} alt="chevron-down"/>
                </p>
            </button>
            <ul className={!toggleDropDown ? `InputSelect__dropdown-menu--open` : ``} >
                {categories?.map(category => {
                    return <li> { category }</li>
                })}
            </ul>
        </div>
    )
};

export default InputSelect;