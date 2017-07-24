import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './Components/PhotoGallery'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Photogallery</h1>
          <PhotoGallery />
      </div>
    );
  }
}

export default App;
