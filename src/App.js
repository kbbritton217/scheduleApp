//main wrapper component of app
import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import Results from './components/results';
import SearchForm from './components/searchform';
import Example from './components/login';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Scheduling App</h1>
            <p>This is a simple scheduling app</p>
            <h5>Sign in or create an account to get started</h5>

            {/*<SearchForm />*/}
          </Grid>
        </Jumbotron>
        <Example />
      </div>
    );
  }
}

export default App;
