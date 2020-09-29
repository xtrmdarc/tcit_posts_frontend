import React, { useState } from 'react'
import { connect } from 'react-redux';
import { filterPosts } from '../../actions';

const PostFilter = props => {
  const [nameFilter, setNameFilter] = useState('');

  const {changeFilter} = props;

  return (
    <div className="postFilter">
      <input type="text" value={nameFilter} onChange={e => setNameFilter(e.target.value)}/>
      <button type="button" onClick={() => changeFilter(nameFilter)}>Buscar</button>
    </div>
  );
}

const mapDispatchToProps= (dispatch) => ({
  changeFilter: (filter) => dispatch(filterPosts(filter))
});

export default connect(null, mapDispatchToProps)(PostFilter);