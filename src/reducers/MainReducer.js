import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  characters: {
    list: [],
    paginator: {
      prevPageUrl: null,
      nextPageUrl: null,
      currentPage: null,
      pageCount: null,
    },
  },
  locations: {
    list: [],
    paginator: {
      prevPageUrl: null,
      nextPageUrl: null,
      currentPage: null,
      pageCount: null,
    },
  },
  episodes: {
    list: [],
    paginator: {
      prevPageUrl: null,
      nextPageUrl: null,
      currentPage: null,
      pageCount: null,
    },
  },
};

function MainReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: {
          list: action.payload.characters,
          paginator: action.payload.paginator,
        },
      };
    case "SET_LOCATIONS":
      return {
        ...state,
        locations: {
          list: action.payload.locations,
          paginator: action.payload.paginator,
        },
      };
    case "SET_EPISODES":
      return {
        ...state,
        episodes: {
          list: action.payload.episodes,
          paginator: action.payload.paginator,
        },
      };
    default:
      return state;
  }
}

let store = createStore(MainReducer, applyMiddleware(thunk));

export default store;
