/* global fetch*/
import React, { Component } from 'react';
import axios from 'axios';
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
    axios('http://api.new-feature.sparkhire.com/v1.0/companies/e9aafdd9-d9f3-455e-b495-58d087415857/photos')
      .then(({ data }) => {
        this.setState({
          photos: data,
        });
      })
      .catch(err => console.error(err));
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
