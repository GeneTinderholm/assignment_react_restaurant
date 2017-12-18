// import React from "react";
// import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
//
// const MapWithAMarker = withGoogleMap(props => (
//   <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}>
//     <Marker position={{lat: -34.397, lng: 150.644}} />
//   </GoogleMap>
// ));
//
// const Map = props => {
//   return (
//     <MapWithAMarker
//       containerElement={<div style={{height: `400px`}} />}
//       mapElement={<div style={{height: `100%`}} />}
//     />
//   );
// };

import React, {Component} from 'react';
// import {GoogleApiWrapper}from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {ApiKey} from './apikey';
 
export class MapContainer extends Component {
render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (ApiKey)
})(MapContainer)
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const AnyReactComponent = ({text}) => (
//   <div
//     style={{
//       position: 'relative',
//       color: 'white',
//       background: 'red',
//       height: 40,
//       width: 60,
//       top: -20,
//       left: -30,
//     }}>
//     {text}
//   </div>
// );
//
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33,
//     },
//     zoom: 11,
//   };
//
//   // AIzaSyDsJUw8AMOAQ5EyUsGGDG9U7edCeL4JBeI
//
//   render() {
//     return (
//       <div className="containter">
//         <GoogleMapReact
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}>
//           <GoogleMap
//             bootstrapURLKeys={{
//               key: 'AIzaSyDsJUw8AMOAQ5EyUsGGDG9U7edCeL4JBeI',
//               language: 'en',
//             }}
//           />
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;
