import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrap, WrapImg, Info } from '../ui/ui';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
    <Wrap>
        <WrapImg id={`${movie.id}`}>
          <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}  />
        </WrapImg>

        <Info>
            <h1>{movie.title}</h1>
            <div>
                <p>{movie.overview}</p>
            </div>
            <Link target='_blank' to={`/${movie.id}`}>
                <p>MORE INFO</p>
            </Link>
        </Info>
    </Wrap>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
