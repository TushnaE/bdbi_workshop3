import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Map';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Map name={this.state.name} />
    );
  }
}

render(<App />, document.getElementById('root'));
