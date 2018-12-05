import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MovieItem.module.css';

export default function MovieItem({ movie }) {
  return (
    <li className={classes.MovieItem}>
      <Link to={`/${movie.id}`}>
        {movie.name} ({movie.year})
      </Link>
    </li>
  );
}
