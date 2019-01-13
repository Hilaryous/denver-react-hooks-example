import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as unsplashApi from '../unsplashApi';

class PhotoInformation extends Component {
  constructor() {
    super();
    this.state = { info: null };
    this.handleSetInfo = this.handleSetInfo.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { photoId } = this.props;
    if (photoId !== prevProps.photoId && photoId.length > 1) {
      unsplashApi.getPhotoStats(photoId, this.handleSetInfo);
    }
  }

  handleSetInfo(info) {
    this.setState(() => ({
      info,
    }));
  }

  render() {
    const { info } = this.state;
    return (
      <div className="nutrition-information">
        <div className="title">
          Photo Information
        </div>
        { info && (
        <div>
          <div className="text">
            {`Downloads:  ${info.downloads}`}
          </div>
          <div className="text">
            {`Views:  ${info.views}`}
          </div>
          <div className="text">
            {`Likes:  ${info.likes}`}
          </div>
        </div>
        ) }
      </div>
    );
  }
}

PhotoInformation.propTypes = {
  photoId: PropTypes.string.isRequired,
};

export default PhotoInformation;
