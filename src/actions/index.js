export const FILTER_POSTS = 'FILTER_POSTS';
export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const filterPosts = filter => {
  return {
    type: FILTER_POSTS,
    filter
  };
}

export const loadPosts = posts => {
  return {
    type: LOAD_POSTS,
    posts,
  }
}

export const addPost = post => {
  return {
    type: ADD_POST,
    post,
  }
}

export const removePost = post => {
  return {
    type: REMOVE_POST,
    post,
  }
}
