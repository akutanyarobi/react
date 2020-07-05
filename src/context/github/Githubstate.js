import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';

import { GET_ITEM } from '../types';

const GithubState = (props) => {
  const initialState = {
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // get item
  const getItem = async () => {
    const res = await axios.get(
      'https://api.github.com/users/iamshaunjp/repos?per_page=6&sort=created&direction=asc'
    );

    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  };

  getItem();

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        getItem,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
