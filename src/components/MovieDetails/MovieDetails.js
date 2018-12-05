import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './MovieDetails.module.css';
import axios from 'axios';

export default class MovieDetails extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    axios
      .get(
        `http://x-mode.co.il/exam/descriptionMovies${
          this.props.location.pathname
        }.txt`
      )
      .then(res => this.setState({ movie: res.data }))
      .catch(console.log);
  }

  render() {
    let movie = this.state.movie;
    return (
      <div className={classes.MovieDetails}>
        <Link to="/" className={classes.BackBtn}>
          <i className="material-icons">arrow_back</i>
        </Link>
        <img src={movie.imageUrl} alt={movie.name} />
        <div className={classes.Description}>
          <h1>{movie.name}</h1>
          <p>
            <span>Year:</span> {movie.year}
          </p>
          <p>
            <span>Category:</span> {movie.category}
          </p>
          <p>
            <span>Rate:</span> {movie.rate}
          </p>
          <p>
            <span>Description:</span> {movie.description}
          </p>
        </div>
      </div>
    );
  }
}
