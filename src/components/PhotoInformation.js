import React, { useContext, useEffect, useState } from 'react';
import * as unsplashApi from '../unsplashApi';
import { PhotoIdContext } from '../PhotoIdContext';

const PhotoInformation = () => {
  const [info, setInfo] = useState(null);

  const { photoId } = useContext(PhotoIdContext);

  function handleSetInfo(response) {
    setInfo(response);
  }

  useEffect(() => {
    unsplashApi.getPhotoStats(photoId, handleSetInfo);
  }, [photoId]);

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
};

export default PhotoInformation;
