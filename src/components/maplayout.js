import React from 'react';
import GoogleApiWrapper from './map';

const MapLayout = prop => {
  return (
    <div className="container">
      <h1>Map</h1>
      <div className="row">
        <div className="col-md-6">
          <p>Find us in the heart of beautiful San Francisco.</p>
        </div>
        <div className="col-md-6">
          <div style={divStyle}>
            <GoogleApiWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

const divStyle = {
  height: '400px',
};

export default MapLayout;
