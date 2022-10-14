import { Component } from 'react';
import movies from '../Data/movies.json';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import { Mapper } from './Utils/mapper';

export class App extends Component {
  state = {
    movies: Mapper(movies),
  };

  componentDidMount() {
    const movies = localStorage.getItem('movies');
    if (movies) {
      this.setState({ movies: JSON.parse(movies) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { movies } = this.state;
    if (movies !== prevState.movies) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }
  deleteMovie = movieId => {
    const updateMovies = this.state.movies.filter(({ id }) => id !== movieId);
    this.setState({ movies: updateMovies });
  };
  render() {
    const { movies } = this.state;
    return <MoviesGallery movies={movies} deleteMovie={this.deleteMovie} />;
  }
}
