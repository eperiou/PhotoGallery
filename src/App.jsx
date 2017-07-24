/* global fetch*/
import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './Components/PhotoGallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }
  componentWillMount() {
    /*
    *  Prior to mounting component acquire photos from API
    *  Sets the state of the component to have the photos be
    *  the return from the API call
    */
  }
  render() {
    return (
      <div className="App">
        <h1>Photogallery</h1>
        <PhotoGallery photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
