import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './Githubstate';

import { GET_ITEM } from '../types';

const GithubState = (props) => {
  const initialState = {
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer);

  // get item

  return (
    <GithubContext.Provider
      value={
        {
          // repos: state.repos,
        }
      }
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
