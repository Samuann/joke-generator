import React from 'react';
import { inputSearchProps } from '../types/jokeTypes';
import './InputSearch.scss';

const InputSearch: React.FC<inputSearchProps> = (props) => {
    const { searchAction } = props;
    
    return (
        <input 
            type='text'
            placeholder='Search here'
            className='InputSearch__input'
            onChange = {(event) => searchAction(event.target.value)}
        /> 
    )
}

export default InputSearch;