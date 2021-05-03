import React, { useState, useEffect } from 'react';
import jokeServices from '../services/jokeService';
import ListJokes from './ListJokes';
import InputSelect from './InputSelect';
import { jokeInfoProps, jokeListProps } from '../types/jokeTypes'
import './DisplayJokes.scss';



const DisplayJokes: React.FC = () => {  
    const [ jokeInfo, setJokeInfo ] = useState<jokeInfoProps | undefined>(undefined);
    const [ jokeCategory, setJokeCategory ] = useState<string>('Any');  
    const [ jokeList, setJokeList ] = useState<Array<jokeListProps> | []>([]);

    const getAllJokeInfo = (): void => {
        jokeServices.readJokeInfo()
        .then(response => {
            setJokeInfo(response.jokes)
        })
        .catch(error => console.error(error))
    };

    const getCategoryList = (category: string): void => {
        jokeServices.getJokeCategoryList(category)
        .then(response => {
            setJokeList(response.jokes)
        })
        .catch(error => console.log(error))
    }

    const selectCategory = (category: string): void => {
        setJokeCategory(category)
    }

    useEffect(getAllJokeInfo, []);

    useEffect(() => getCategoryList(jokeCategory), [jokeCategory]);
    
    console.log(jokeCategory, 'jokeinfo');
    return (
        <div className="DisplayJokes">
            <h1 className="DisplayJokes__header"> Joke Generation</h1>
            <p className="DisplayJokes__sub-header"> {jokeInfo ?`Generating a total of ${jokeInfo?.totalCount} jokes`: `Waiting`}</p>
            <section className="DisplayJokes__filter-search-section">
                <InputSelect 
                    categories= {jokeInfo?.categories} 
                    category= {jokeCategory}
                    selectAction = {selectCategory}
                />
            </section>
            <section className="DisplayJokes__jokelist-container">
                { jokeList?.length 
                    ? (jokeList.map((joke: jokeListProps) => <ListJokes key={joke.id} { ...joke }/> )) 
                    : <p> Waiting...</p>}
            </section>
        </div>
    );
}

export default DisplayJokes;