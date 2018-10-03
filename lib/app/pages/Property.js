import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';

export class PropertyPage extends Component {

  constructor(props) {
    super(props);
    this.property = props.viewer.property;
    this.propertyID = props.relay.variables.propertyID;
    this.location = this.property.location;
  }

  render() {
    if (!this.property) {
      return (
        <div>
          <h3>this property ({this.propertyID}) was not found</h3>
        </div>
      );
    }

    const html = `lat: ${this.location.lat} lng: ${this.location.lng}`;

    return (
      <div>
        <h3>property: {this.property.address}</h3>
        <p>{html}</p>
        <div id="map-canvas"></div>
      </div>
    );
  }

  componentDidMount() {
    var latlng = new google.maps.LatLng(this.location.lat, this.location.lng);
    var mapOptions = {
      zoom: 14,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker = new google.maps.Marker({
      map: map,
      position: latlng
    });
  }

}

export default Relay.createContainer(PropertyPage, {
  initialVariables: {
    propertyID: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        property(propertyID: $propertyID) {
          address
          location {
            lat
            lng
          }
        }
      }
    `,
  },
});

PropertyPage.propTypes = {
  relay: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
};
