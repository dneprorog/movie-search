/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { MovieGrid, Input, Loading } from '../ui/ui';
import Movie from './Movie';
import { fetchAllMovieRequest } from '../actions/actions';

class MoviesList extends PureComponent {
  constructor() {
    super();

    this.state = {
      search: ''
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    const { fetchAllMovie, page } = this.props;

    fetchAllMovie(page);

    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const { fetchAllMovie, page } = this.props;

    const offset = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

    if (offset) {
      fetchAllMovie(page);
    }
  };

  updateSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const { isPending, data, error} = this.props;

    if (isPending) {
      return <Loading><p>Loading!</p></Loading>
    }

    if (error) {
      return <div>Error</div>

    }

    let filteredData =  data.filter((item) => {
      return item.original_title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <MovieGrid>
        <Input
            value={this.state.search}
            type='text'
            onChange={this.updateSearch}
            placeholder='Search...'
        />
        {filteredData.map(movie => <Movie key={movie.id} movie={movie}  />)}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  isPending: state.movie.isPending,
  data: state.movie.data,
  error: state.movie.error,
  page: state.movie.page,
});

const mapDispatchToProps = dispatch => ({
  fetchAllMovie: (page) => dispatch(fetchAllMovieRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
