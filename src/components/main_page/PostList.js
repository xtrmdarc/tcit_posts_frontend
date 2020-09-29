import React from 'react'
import { connect } from 'react-redux';
import { removePost } from '../../actions';
import api from '../../services/api';

const PostList = props => {
  const { posts, removePost } = props;

  const handleRemove = (id) => {
    api.removePost(id).then( post => {
      removePost(post);
    });
  }

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
            <button onClick={() => handleRemove(post.id)} type="button">Remove</button>
          </div>
        </div>
      ))
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  removePost: (post) => dispatch(removePost(post)),
});

export default connect(null, mapDispatchToProps)(PostList);
