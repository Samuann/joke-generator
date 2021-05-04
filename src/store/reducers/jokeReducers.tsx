import { jokeState } from '../../types/jokeTypes'

const initialState = {
    category: 'Any',
    jokeList: []
};

interface IJoke {
    category: string,
    jokeList: []
}

type JokeAction = {
    type: string,
    payload: IJoke
};

const jokeReducer = (
    state: jokeState = initialState,
    action: JokeAction
) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'SET_JOKE_LIST':
            return {
                ...state,
                jokeList: action.payload
            }    
        default: 
            return state;    
    }
}

export default jokeReducer;