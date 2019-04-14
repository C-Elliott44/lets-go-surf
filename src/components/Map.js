import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;


 
class Map extends Component {
 
  render() {
    return (
      <div className="Map" style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0fgzm00Nx4vGdj6EqJTA8oGBgOQkKj60" }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;