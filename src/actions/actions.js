import {
  FETCH_ALL_MOVIE_REQUEST,
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_ALL_MOVIE_FAILURE,
  FETCH_DETAIL_MOVIE_REQUEST,
  FETCH_DETAIL_MOVIE_SUCCESS,
  FETCH_DETAIL_MOVIE_FAILURE,
} from '../constants/constants';

export function fetchAllMovieRequest(payload) {
  return {
    type: FETCH_ALL_MOVIE_REQUEST,
    payload,
  }
}

export function fetchAllMovieSuccess(payload) {
  return {
    type: FETCH_ALL_MOVIE_SUCCESS,
    payload,
  }
}

export function fetchAllMovieFailure(payload) {
  return {
    type: FETCH_ALL_MOVIE_FAILURE,
    payload,
  }
}

export function fetchDetailMovieRequest(payload) {
  return {
    type: FETCH_DETAIL_MOVIE_REQUEST,
    payload,
  }
}

export function fetchDetailMovieSuccess(payload) {
  return {
    type: FETCH_DETAIL_MOVIE_SUCCESS,
    payload,
  }
}

export function fetchDetailMovieFailure(payload) {
  return {
    type: FETCH_DETAIL_MOVIE_FAILURE,
    payload,
  }
}
