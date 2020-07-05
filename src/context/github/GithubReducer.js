// untuk menyimpan perintah dan akan ditampilkan di react devtools

import { GET_ITEM } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};
