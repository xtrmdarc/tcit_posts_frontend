import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../../actions';
import api from '../../services/api';

const PostForm = props => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const { createPost } = props;

  const handleSubmit = () => {
    if(!name || !description) {
      setError('Please add name and description');
      return;
    }
    api.addPost(name, description).then( post => {
      if(post.id) {
        createPost(post);
      }
      setDescription('');
      setName('');
    });
    
  }

  return (
    <>
      <div className="postForm">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button type="button" onClick={handleSubmit}>Create</button>
      </div>
      {error != '' && <span className="errorMessage">{error}</span>}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(addPost(post)),
});

export default connect(null, mapDispatchToProps)(PostForm);
