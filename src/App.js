import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';
import config from './config';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactMapGL
          width={1900}
          height={1080}
          latitude={30.2598}
          longitude={-97.724}
          zoom={13}
          onViewportChange={viewport => {
            const { width, height, latitude, longitude, zoom } = viewport;
          }}
          mapboxApiAccessToken={config.MAPBOX_GL_JS_KEY}
        />
      </div>
    );
  }
}

export default App;
