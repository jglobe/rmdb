import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    characters: []
}

function CharactersListReducer(state = initialState, action) {
    switch (action.type) {
      case 'IS_CHARACTERS':
        return {...state, characters: action.payload}
      default:
        return state
    }
}

let store = createStore(CharactersListReducer, applyMiddleware(thunk));

export default store;