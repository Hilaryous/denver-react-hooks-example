import React, { useContext, useEffect, useState } from 'react';
import * as unsplashApi from '../unsplashApi';
import Photo from './Photo';
import { SearchContext } from '../SearchContext';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  function handleSetPhotos(response) {
    setPhotos(response);
  }

  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    if (searchTerm.length > 1) {
      unsplashApi.searchPhotos(searchTerm, handleSetPhotos);
    } else if (searchTerm === '') {
      unsplashApi.getPhotos(handleSetPhotos);
    }
  }, [searchTerm]);

  return (
    <div className="photo-list">
      { photos.length > 0 ? photos.map(photo => (
        <Photo
          key={photo.id}
          photo={photo}
        />
      )) : 'No Photos Found'}
    </div>
  );
};

export default Photos;
