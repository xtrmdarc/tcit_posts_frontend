import { ADD_POST, FILTER_POSTS, LOAD_POSTS, REMOVE_POST } from '../actions';

const postsInitialState = {
  items: [],
  filter: '',
}

const postsReducer = (state = postsInitialState, action) => {
  switch(action.type) {
    case FILTER_POSTS: {
      const newState = Object.assign({}, state, {filter: action.filter});
      return newState;
    }
    case LOAD_POSTS: {
      return Object.assign({}, state, {items: action.posts});
    }
    case ADD_POST: {
      const posts = state.items.slice();
      posts.push(action.post);
      return Object.assign({}, state, {items: posts});
    }
    case REMOVE_POST: {
      const odlPosts = state.items.slice();
      const posts = odlPosts.filter(post => post.id !== action.post.id);
      return Object.assign({}, state, {items: posts});
    }
    default: return state;
  }
}

export default postsReducer;
