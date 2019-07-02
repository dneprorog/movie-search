/* eslint react/no-did-mount-set-state: 0 */
import React, { Component, Fragment } from 'react';
import Overdrive from 'react-overdrive';
import { Poster, MovieWrapper, MovieInfo, Error, Loading } from '../ui/ui';
import {connect} from "react-redux";
import {fetchDetailMovieRequest} from "../actions/actions";

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';


class MovieDetail extends Component {
  componentDidMount() {
    const { fetchDetailMovie, match } = this.props;

    fetchDetailMovie(match.params.id);
  }

  render() {
    const { isPending, data, error } = this.props;

    if (error) {
      return <Error><p>Error!</p></Error>
    }

    return (
      <Fragment>
        {isPending ? (
          <Loading><p>Loading</p></Loading>
        ) : (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${data.backdrop_path}`}>
              <MovieInfo>
                <Overdrive id={`${data.id}`}>
                  <Poster src={`${POSTER_PATH}${data.poster_path}`} alt={data.title} />
                </Overdrive>
                <div>
                  <h1>{data.title}</h1>
                  <h3>{data.release_date}</h3>
                  <p>{data.overview}</p>
                </div>
              </MovieInfo>
            </MovieWrapper>
          )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isPending: state.detailMovie.isPending,
  data: state.detailMovie.data,
  error: state.detailMovie.error,
});

const mapDispatchToProps = dispatch => ({
  fetchDetailMovie: (id) => {
    dispatch(fetchDetailMovieRequest(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
