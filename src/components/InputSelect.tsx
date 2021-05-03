import React, {useState} from 'react';
import { inputSelectProps } from '../types/jokeTypes';
import  './InputSelect.scss';
import chevronDown from '../assets/icons/chevron-down.svg';

const InputSelect: React.FC<inputSelectProps> = (props) => {
    const { categories, category, selectAction } = props;
    const [ toggleDropDown, setToggleDropDown ] = useState<boolean>(false);

    const handleToggle = (): void => {
        setToggleDropDown(!toggleDropDown)
    }

    const handleSelect = (jokeCategory: string): void => {
        console.log('does this word here')
        selectAction(jokeCategory);
    }

    console.log(categories, category, 'categories')
    return (
        <div className="InputSelect">
            <button 
                className="InputSelect__select-button"
                onClick={handleToggle}
            >
                <p className="InputSelect__select-text">
                    Filter <span className="InputSelect__category-name"> {category} </span> category 
                    <img className="InputSelect__chevron" src={chevronDown} alt="chevron-down"/>
                </p>
            </button>
            <ul className={toggleDropDown ? `InputSelect__dropdown-menu` : `InputSelect__dropdown-menu--close`} >
                {categories?.map(category => {
                    return <li 
                            className='InputSelect__category-list'
                            key={category}
                            onClick={() => handleSelect(category)}
                            >
                                { category }
                            </li>
                })}
            </ul>
        </div>
    )
};

export default InputSelect;