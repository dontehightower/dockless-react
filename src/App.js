import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactMapGL
          width={1900}
          height={1080}
          latitude={30.275}
          longitude={-97.741}
          zoom={13}
          onViewportChange={viewport => {
            const { width, height, latitude, longitude, zoom } = viewport;
          }}
          mapboxApiAccessToken={'pk.eyJ1IjoiZG9udGVoaWdodG93ZXIiLCJhIjoiY2pwZjJtNmU5MDZsejNrcGFoamRpeDE3eiJ9.aXSsS9oRSZV35tevKTv3Kg'}
        />
      </div>
    );
  }
}

export default App;
