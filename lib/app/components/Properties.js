import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import { Property } from './';
import { Radio } from './';

export class PropertiesList extends Component {
  renderSortKey() {
    const { sortKey, updateSortKey } = this.props;
    console.log(sortKey, updateSortKey); // eslint-disable-line no-console
    return (
      <div className="sort-key">
        <p>
          current sort key: {sortKey}
        </p>
      </div>
    );
  }

  renderSortOrder() {
    const { sortOrder, updateSortOrder } = this.props;
    console.log(sortOrder, updateSortOrder); // eslint-disable-line no-console
    return (
      <div className="sort-order">
        <p>
          current sort order: {sortOrder}
        </p>
      </div>
    );
  }

  render() {
    const { sortKey, viewer } = this.props;
    return (
      <div>
        <div>
          <Radio
            sortKey={this.props.sortKey}
            updateSortKey={this.props.updateSortKey}
            sortOrder={this.props.sortOrder}
            updateSortOrder={this.props.updateSortOrder}
          />
        </div>
        <div className="properties">
          {this.renderSortKey()}
          {this.renderSortOrder()}
          <ul className="properties-list">
            {viewer.properties.map((p, i) =><Property key={i} property={p} sortKey={sortKey}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(PropertiesList, {
  initialVariables: {
    sortKey: null,
    sortOrder: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        properties(sortKey: $sortKey, sortOrder: $sortOrder) {
          ${Property.getFragment('property')}
        }
      }
    `,
  },
});

PropertiesList.propTypes = {
  sortKey: PropTypes.oneOf(['address', 'id']).isRequired,
  sortOrder: PropTypes.oneOf(['asc', 'desc']).isRequired,
  updateSortKey: PropTypes.func.isRequired,
  updateSortOrder: PropTypes.func.isRequired,
  viewer: PropTypes.object.isRequired,
};
