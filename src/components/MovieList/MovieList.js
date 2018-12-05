import React, { Component, Fragment } from 'react';
import axios from 'axios';

import MovieItem from './MovieItem/MovieItem';
import classes from './MovieList.module.css';

export default class MovieList extends Component {
  state = {
    movies: [],
    filteredMovies: []
  };

  componentDidMount() {
    axios
      .get('http://x-mode.co.il/exam/allMovies/allMovies.txt')
      .then(res => {
        this.setState({
          movies: res.data.movies,
          filteredMovies: res.data.movies
        });
      })
      .catch(console.log);
  }

  handleInputChange = e => {
    let filteredMovies = this.state.movies.filter(
      movie =>
        movie.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );
    this.setState({ filteredMovies });
  };

  render() {
    let movies =
      this.state.filteredMovies.length > 0
        ? this.state.filteredMovies
        : this.state.movies;
    return (
      <Fragment>
        <h1 className={classes.Header}>Cinema</h1>
        <input
          type="text"
          placeholder="Search a movie..."
          className={classes.Searchbar}
          onChange={this.handleInputChange}
        />
        <ul className={classes.MovieList}>
          {movies
            .sort((a, b) => parseInt(a.year) - parseInt(b.year))
            .map(movie => (
              <MovieItem movie={movie} key={movie.id} />
            ))}
        </ul>
      </Fragment>
    );
  }
}
