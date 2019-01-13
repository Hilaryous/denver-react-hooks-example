import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InfoIcon from './InfoIcon';

class Photo extends PureComponent {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    const { setPhotoInfoId } = this.props;
    setPhotoInfoId(id);
  }

  render() {
    const { photo: { description, urls: { thumb }, id } } = this.props;
    return (
      <div className="image">
        <img
          alt={description}
          src={thumb}
        />
        <button
          className="info-button"
          name="info"
          onClick={() => this.handleOnClick(id)}
          type="button"
        >
          <InfoIcon />
        </button>
      </div>
    );
  }
}

Photo.propTypes = {
  photo: PropTypes.shape({
    description: PropTypes.string,
    urls: PropTypes.shape({
      thumb: PropTypes.string,
    }),
    id: PropTypes.string,
  }).isRequired,
  setPhotoInfoId: PropTypes.func.isRequired,
};

export default Photo;
