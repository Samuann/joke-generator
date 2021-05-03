import React from 'react';
import { jokeListProps } from '../types/jokeTypes';
import jokeTypeEnum from '../enums/jokeTypeEnum';
import './ListJoke.scss';

const displaySingleJoke = (jokeString: string | undefined): JSX.Element => (
    <p className="ListJoke__single-jokes"> {jokeString} </p>
);

const displayTwoPartJoke = (firstJoke: string | undefined, secondJoke: string | undefined): JSX.Element => {
    return (
    <div className="ListJoke__twopart-jokes">
        <span className="ListJoke__twopart-setup"> { firstJoke }</span>
        <span> { secondJoke } </span>
    </div>
    )
}

const ListJoke: React.FC<jokeListProps> = (props) => {
    const { category, type, joke, setup, delivery } = props;
    return (
        <>
            <article className="ListJoke">
                <header className="ListJoke__header"> 
                    <span className="ListJoke__type"> <strong> Joke Type: </strong> {type} </span>
                    <span className="ListJoke__category"> <strong> Joke Category: </strong> {category} </span>
                    
                </header>
                <div className="ListJoke__jokes">
                    {type === jokeTypeEnum.single ? displaySingleJoke(joke) : displayTwoPartJoke(setup, delivery)}
                </div>
            </article>
            <div>
                
            </div>
        </>
    )
};

export default ListJoke;