import React from 'react'

const PostList = props => {
  const { posts } = props;

  return (
    <div className="postList">
      <div className='postListHeader'>
        <span className="postName">Name</span>
        <span className="postDesc">Description</span>
        <span className="postAction">Actions</span>
      </div>
      {posts.map(post => (
        <div key={post.id} className="postItem">
          <div className='postName'>
            {post.name}
          </div>
          <div className='postDesc'>
            {post.description}
          </div>
          <div className='postAction'>
            <button type="button">Remove</button>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default PostList;
