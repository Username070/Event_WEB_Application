import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const API_KEY = process.env.REACT_APP_MAPS_KEY;

export class MapContainer extends Component {
  state = {
    center: {
      lat: 54.896978049484304,
      lng: 23.918825799542333
    }
  };

  componentDidMount() {
    let newLat = {
      lat: 54.896978049484304,
      lng: 23.918825799542333
    };
    this.setState({ center: newLat });
  }
  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <div>
        <Map google={this.props.google}
          style={{ width: '100%', height: '75vh', position:"relative"}}
          onClick={this.onMapClicked}
          center={this.state.center}
          zoom={18}>
          <Marker
            title={'Laisvės alėja 33, Kaunas'}
            name={'Laisvės alėja 33, Kaunas'}
            position={{ lat: 54.89694103186777, lng: 23.91856830748374 }} />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);