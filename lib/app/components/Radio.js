import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Radio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortKey: props.sortKey,
      sortOrder: props.sortOrder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.dataset.sort) {
      this.setState({ sortOrder: event.target.value });
      this.props.updateSortOrder(event.target.value);
    } else {
      this.setState({ sortKey: event.target.value });
      this.props.updateSortKey(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <div className="radio-group">
          <div className="radio">
            <label htmlFor="address">
              <input type="radio" id="address" value="address" checked={this.state.sortKey === 'address'} onChange={this.handleChange} />
              Address
                </label>
          </div>
          <div className="radio">
            <label htmlFor="id">
              <input type="radio" id="id" value="id" checked={this.state.sortKey === 'id'} onChange={this.handleChange} />
              Id
                </label>
          </div>
        </div>
        <div className="radio-group">
          <div className="radio">
            <label htmlFor="asc">
              <input type="radio" id="asc" data-sort="true" value="asc" checked={this.state.sortOrder === 'asc'} onChange={this.handleChange} />
              Sort ascending
                </label>
          </div>
          <div className="radio">
            <label htmlFor="desc">
              <input type="radio" id="desc" data-sort="true" value="desc" checked={this.state.sortOrder === 'desc'} onChange={this.handleChange} />
              Sort descending
                </label>
          </div>
        </div>
      </div>);
  }
}

Radio.propTypes = {
  sortKey: PropTypes.oneOf(['address', 'id']).isRequired,
  sortOrder: PropTypes.oneOf(['asc', 'desc']).isRequired,
  updateSortKey: PropTypes.func.isRequired,
  updateSortOrder: PropTypes.func.isRequired,
};