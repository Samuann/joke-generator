import React, { useState, useEffect } from 'react';
import jokeServices from '../services/jokeService';

interface jokeInfoProps {
    totalCount: number
};

const DisplayJokes: React.FC = () => {  
    const [ jokeInfo, setJokeInfo ] = useState<jokeInfoProps | undefined>(undefined);
    const [ jokeCategory, setJokeCategory ] = useState<string>('Any');  
    const [ jokeList, setJokeList ] = useState<[]>([]);

    const getAllJokeInfo = () => {
        jokeServices.readJokeInfo()
        .then(response => {
            setJokeInfo(response.jokes)
        })
        .catch(error => console.error(error))
    };

    const getCategoryList = (category: string) => {
        jokeServices.getJokeCategoryList(category)
        .then(response => {
            setJokeList(response.jokes)
        })
    }

    useEffect(getAllJokeInfo, []);

    useEffect(() => getCategoryList(jokeCategory), []);

    return (
        <>
        <h1> Joke Display</h1>
        <p> {`Total count: ${jokeInfo?.totalCount}`}</p>
        </>
    );
}

export default DisplayJokes;