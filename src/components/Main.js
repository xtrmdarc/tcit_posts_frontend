import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { loadPosts } from '../actions';
import api from '../services/api';
import PostFilter from './main_page/PostFilter';
import PostForm from './main_page/PostForm';
import PostList from './main_page/PostList';

const Main = props => {
  const {posts, postsFilter, loadPosts} = props;
  console.log(posts);
  useEffect(() => {
    api.getPosts().then(posts => {
      loadPosts(posts);
    });
  },[]);

  return (
    <div className="mainPage">
      <div className="contentWrapper">
        <PostFilter />
        <PostList posts={posts.filter(p=> p.name == postsFilter || postsFilter == '')} />
        <PostForm />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loadPosts: (posts) => dispatch(loadPosts(posts))
});

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  postsFilter: state.posts.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);