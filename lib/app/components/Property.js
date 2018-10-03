import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import { Link } from './';

export function PropertyComponent({ property, sortKey }) {

  const html = sortKey === 'address' ? property.address : '(id: ' + property.id + ') ' + property.address;

  return (
    <li className="property">
      <Link to={`/${property.id}`}>
        <b>address:</b> {html}
      </Link>
    </li>
  );
}

export default Relay.createContainer(PropertyComponent, {
  fragments: {
    property: () => Relay.QL`
      fragment on Property {
        address
        id
        location {
          lat
          lng
        }
      }
    `,
  },
});

PropertyComponent.propTypes = { property: PropTypes.object.isRequired };
