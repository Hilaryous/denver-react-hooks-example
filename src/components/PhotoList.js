import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import * as unsplashApi from '../unsplashApi';

class Photos extends Component {
  constructor() {
    super();
    this.state = { photos: [] };
    this.handleSetPhotos = this.handleSetPhotos.bind(this);
  }

  componentWillMount() {
    unsplashApi.getPhotos(this.handleSetPhotos);
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props;
    if (searchTerm !== prevProps.searchTerm && searchTerm.length > 1) {
      unsplashApi.searchPhotos(searchTerm, this.handleSetPhotos);
    } else if (searchTerm !== prevProps.searchTerm && searchTerm === '') {
      unsplashApi.getPhotos(this.handleSetPhotos);
    }
  }

  handleSetPhotos(photos) {
    this.setState(() => ({
      photos,
    }));
  }

  render() {
    const { photos } = this.state;
    const { setPhotoInfoId } = this.props;
    return (
      <div className="photo-list">
        { photos.length > 0 ? photos.map(photo => (
          <Photo
            key={photo.id}
            photo={photo}
            setPhotoInfoId={setPhotoInfoId}
          />
        )) : 'No Photos Found'}
      </div>
    );
  }
}

Photos.defaultProps = {
  searchTerm: '',
};

Photos.propTypes = {
  searchTerm: PropTypes.string,
  setPhotoInfoId: PropTypes.func.isRequired,
};

export default Photos;
