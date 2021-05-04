import { jokeState } from '../../types/jokeTypes'

const initialState = {
    category: 'Any'
};

interface IJoke {
    count: number
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
        default: 
            return state;    
    }

}

export default jokeReducer;