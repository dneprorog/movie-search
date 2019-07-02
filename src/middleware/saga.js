import {
  call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import { FETCH_ALL_MOVIE_REQUEST, FETCH_DETAIL_MOVIE_REQUEST } from '../constants/constants';
import { fetchAllMovieSuccess, fetchAllMovieFailure, fetchDetailMovieSuccess, fetchDetailMovieFailure } from '../actions/actions';
import { getMovies, getMovieDetail } from '../services/services';

function* allMovies(action) {
  try {
    const { payload } = action;

    const res = yield call(getMovies, payload);

    yield put(fetchAllMovieSuccess(res.data.results));
  } catch (e) {
    yield put(fetchAllMovieFailure(e));
  }
}

function* detailMovie(action) {
  try {
    const { payload } = action;

    const res = yield call(getMovieDetail, payload);

    console.log('res', res);

    yield put(fetchDetailMovieSuccess(res.data));
  } catch (e) {
    yield put(fetchDetailMovieFailure(e));
  }
}

function* moviesSaga() {
  yield takeLatest(FETCH_ALL_MOVIE_REQUEST, allMovies);
  yield takeEvery(FETCH_DETAIL_MOVIE_REQUEST, detailMovie);
}

export default moviesSaga;
