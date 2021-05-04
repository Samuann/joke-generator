import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import jokeServices from '../services/jokeService';
import ListJokes from './ListJokes';
import InputSelect from './InputSelect';
import InputSearch from './InputSearch';
import { jokeInfoProps, jokeListProps, jokeState, displayJokesProps } from '../types/jokeTypes';
import jokeCategoryEnum  from '../enums/jokeCategoryEnum';
import * as jokeActions from '../store/actions/jokeActions';
import './DisplayJokes.scss';

const DisplayJokes: React.FC<displayJokesProps> = (props) => {  
    const { updateJokeCategory, category, updateJokeList } = props;
    const [ jokeInfo, setJokeInfo ] = useState<jokeInfoProps | undefined>(undefined);
    const [ jokeCategory, setJokeCategory ] = useState<string>(category);  
    const [ jokeList, setJokeList ] = useState<Array<jokeListProps> | []>([]);
    const [ error, setError ] = useState<boolean>(false);
    const [ searchString, setSearchString ] = useState<string>('');
    

    const getAllJokeInfo = (): void => {
        jokeServices.readJokeInfo()
        .then(response => {
            setJokeInfo(response.jokes);
        })
        .catch(error => console.error(error));
    };

    const getCategoryList = (category: string): void => {
        jokeServices.getJokeCategoryList(category)
        .then(response => {
            setJokeList(response.jokes);
            updateJokeList(response.jokes);
            setError(response.error)
        })
        .catch(error => console.error(error));
    };

    const getCategoryFromSearchString = (search: string): void => {
        jokeServices.getJokeSearched(search)
        .then(response => {
            setJokeList(response.jokes);
            setJokeCategory(jokeCategoryEnum.any);
            setError(response.error);
            updateJokeList(response.jokes)
        })
        .catch(error => console.error(error));
    }

    useEffect(getAllJokeInfo, []);

    useEffect(() => getCategoryList(jokeCategory), [jokeCategory]);

    useEffect(() => getCategoryFromSearchString(searchString), [searchString]);

    const selectCategory = (category: string): void => {
        setJokeCategory(category);
        updateJokeCategory(category)
    };

    const handleSearchChange = (stringSearch: string): void => {
        setSearchString(stringSearch);
    };

    const handleErrorAndWaiting = (): JSX.Element => {
        if(error && jokeCategory === jokeCategoryEnum.dark) {
            return (<p> Sorry safe-mode turned on. No Dark jokes available</p>)
        }

        if(error) {
            return (<p> Joke retrieval for <strong> {searchString} </strong> is unavailable. <br/>Please try a different search term</p>)
        }

        return (<p> Waiting... </p>)
    }

    return (
        <div className="DisplayJokes">
            <h1 className="DisplayJokes__header"> Joke Generation</h1>
            <p className="DisplayJokes__sub-header"> 
                {jokeInfo ?`Our joke generator contains a total of ${jokeInfo?.totalCount} jokes`: `Waiting`}
            </p>
            <section className="DisplayJokes__filter-search-section">
                <InputSelect 
                    categories= {jokeInfo?.categories} 
                    category= {jokeCategory}
                    selectAction = {selectCategory}
                    search = {searchString}
                />
                <InputSearch searchAction = { handleSearchChange }/>
            </section>
            <h4 className="DisplayJokes__category-header">{`Joke Category: ${jokeCategory}`}</h4>
            <section className="DisplayJokes__jokelist-container">
    
                { !error && jokeList?.length
                    ? (jokeList.map((joke: jokeListProps) => <ListJokes key={joke.id} { ...joke }/> )) 
                    : handleErrorAndWaiting()
                }
            </section>
        </div>
    );
}

const mapStateToProps = (state: jokeState) => ({
    category: state.category
})

const mapDispatchToProps = (dispatch: any) => ({
    updateJokeCategory: (jokeCategory: string) => {
        dispatch(jokeActions.setCategory(jokeCategory))
    },
    updateJokeList: (jokeList: []) => {
        dispatch(jokeActions.setJokeList(jokeList))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayJokes);