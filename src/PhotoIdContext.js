import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PhotoIdContext = React.createContext(null);

const PhotoIdProvider = ({ children }) => {
  const [photoId, setPhotoId] = useState('');

  function handleSetPhotoId(term) {
    setPhotoId(term);
  }
  return (
    <PhotoIdContext.Provider
      value={{
        photoId,
        setPhotoInfoId: handleSetPhotoId,
      }}
    >
      {children}
    </PhotoIdContext.Provider>
  );
};

PhotoIdProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PhotoIdContext, PhotoIdProvider };
