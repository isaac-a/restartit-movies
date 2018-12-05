import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={MovieList} />
          <Route path="/:id" component={MovieDetails} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
