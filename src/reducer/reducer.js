import {
  FETCH_ALL_MOVIE_REQUEST,
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_ALL_MOVIE_FAILURE,
  FETCH_DETAIL_MOVIE_REQUEST,
  FETCH_DETAIL_MOVIE_SUCCESS,
  FETCH_DETAIL_MOVIE_FAILURE,
} from '../constants/constants';

const initState = {
  isPending: true,
  data: [],
  error: null,
  search: '',
  page: 1,
};

export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIE_REQUEST:
      return {
        ...state,
        // isPending: true,
        error: null,
      };
    case FETCH_ALL_MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: [
          ...state.data,
          ...action.payload,
        ],
        error: null,
        page: state.page + 1,
      };
    case FETCH_ALL_MOVIE_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initStateDetail = {
  isPending: true,
  data: null,
  error: null,
};

export const detailMovieReducer = (state = initStateDetail, action) => {
  switch (action.type) {
    case FETCH_DETAIL_MOVIE_REQUEST:
      return {
        ...state,
        isPending: true,
        data: null,
        error: null,
      };
    case FETCH_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: null,
      };
    case FETCH_DETAIL_MOVIE_FAILURE:
      return {
        ...state,
        isPending: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
