import React from 'react'

const PostList = props => {
  const { posts } = props;

  return (
    <>
      {posts.map(post => (
        <div>
          {post.name}
        </div>
      ))
      }
      
    </>
  );
}

export default PostList;