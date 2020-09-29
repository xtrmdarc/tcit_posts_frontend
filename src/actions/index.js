export const FILTER_POSTS = 'FILTER_POSTS';

export const filterPosts = filter => {
  return {
    type: FILTER_POSTS,
    filter
  };
}
