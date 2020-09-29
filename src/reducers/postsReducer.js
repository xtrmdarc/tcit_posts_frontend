import { FILTER_POSTS } from '../actions';

const postsInitialState = {
  items: [],
  filter: '',
}

const postsReducer = (state = postsInitialState, action) => {
  switch(action.type) {
    case FILTER_POSTS: {
      console.log(state);
      const newState = Object.assign({}, state, {filter: action.filter});
      console.log(newState)
      return newState;
    }
    default: return state;
  }
}

export default postsReducer;
