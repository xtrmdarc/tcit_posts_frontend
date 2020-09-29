
const api = (() => {
  const getPosts = async () => {
    const response = await fetch('/api/posts/');
    const data = await response.json();
    return data;
  };

  const addPost = async (name, description) => {
    const response = await fetch('/api/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, description}),
    });
    const data = await response.json();
    return data;
  };

  const removePost = async (postId) => {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  };

  return {getPosts, addPost, removePost};
})();

export default api;
