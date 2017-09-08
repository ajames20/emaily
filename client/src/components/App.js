import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
