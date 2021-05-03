import React from 'react';
import { jokeListProps } from '../types/jokeTypes';
import jokeTypeEnum from '../enums/jokeTypeEnum';
import './ListJoke.scss';

const displaySingleJoke = (jokeString: string | undefined): JSX.Element => (
    <p> {jokeString} </p>
);

const displayTwoPartJoke = (firstJoke: string | undefined, secondJoke: string | undefined): JSX.Element => {
    return (
    <div>
        <span> { firstJoke }</span>
        <span> { secondJoke } </span>
    </div>
    )
}

const ListJoke: React.FC<jokeListProps> = (props) => {
    const { category, type, joke, setup, delivery } = props;
    return (
        <>
            <article className="ListJoke">
                <header> 
                    { `Joke Type: ${type}` }
                </header>
                <div>
                    {type === jokeTypeEnum.single ? displaySingleJoke(joke) : displayTwoPartJoke(setup, delivery)}
                </div>
            </article>
            <div>
                
            </div>
        </>
    )
};

export default ListJoke;