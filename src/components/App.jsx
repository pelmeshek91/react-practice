import { Component } from 'react';
import movies from '../Data/movies.json';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import { Mapper } from './Utils/mapper';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    movies: Mapper(movies),
    currentImage: null,
  };

  componentDidMount() {
    const movies = localStorage.getItem('movies');
    if (movies) {
      this.setState({ movies: JSON.parse(movies) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { movies } = this.state;
    if (movies !== prevState.movies) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }
  deleteMovie = movieId => {
    const updateMovies = this.state.movies.filter(({ id }) => id !== movieId);
    this.setState({ movies: updateMovies });
  };
  updateCurrentImg = data => {
    this.setState({ currentImage: data });
  };
  closeModal = () => {
    this.setState({ currentImage: null });
  };
  render() {
    const { movies, currentImage } = this.state;
    return (
      <>
        <MoviesGallery
          movies={movies}
          deleteMovie={this.deleteMovie}
          openModal={this.updateCurrentImg}
        />
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
