import { jokeListProps } from '../../types/jokeTypes';

export type SetCategoryAction = {type: string, payload: string};
export type SetJokeList = {type: string, payload: Array<jokeListProps> }

export const setCategory = (category: string): SetCategoryAction => ({
    type: 'SET_CATEGORY',
    payload: category
});

export const setJokeList = (jokeList: []): SetJokeList => ({
    type: 'SET_JOKE_LIST',
    payload: jokeList
})

