import React from 'react'
import { connect } from 'react-redux';
import PostFilter from './main_page/PostFilter';
import PostList from './main_page/PostList';

const Main = props => {

  const {posts, postsFilter} = props;

  return (
    <div className="mainPage">
      <div className="contentWrapper">
        <PostFilter />
        <PostList posts={posts.filter(p=> p.name == postsFilter || postsFilter == '')} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  postsFilter: state.posts.filter,
});

export default connect(mapStateToProps)(Main);