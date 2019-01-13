import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import InfoIcon from './InfoIcon';
import { PhotoIdContext } from '../PhotoIdContext';


const Photo = ({ photo: { description, urls: { thumb }, id } }) => {
  const { setPhotoInfoId } = useContext(PhotoIdContext);

  const handleOnClick = useCallback(
    () => setPhotoInfoId(id),
    [id],
  );

  return (
    <div className="image">
      <img
        alt={description}
        src={thumb}
      />
      <button
        className="info-button"
        name="info"
        type="button"
        onClick={handleOnClick}
      >
        <InfoIcon />
      </button>
    </div>);
};

Photo.propTypes = {
  photo: PropTypes.shape({
    description: PropTypes.string,
    urls: PropTypes.shape({
      thumb: PropTypes.string,
    }),
    id: PropTypes.string,
  }).isRequired,
};

export default Photo;
