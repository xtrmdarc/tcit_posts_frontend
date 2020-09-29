
const api = (() => {
  const getPosts = async () => {
    const response = await fetch('/posts/');
    const data = await response.json();
    return data;
  };

  const addPost = async (name, description) => {
    const response = await fetch('/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, description}),
    });
    const data = await response.json();
    return data;
  };

  return {getPosts, addPost};
})();

export default api;
