import React, { useContext } from 'react';
import { PhotoIdContext } from '../PhotoIdContext';
import useFetch from '../fetchHook';
import Err from './Err';
import Loading from './Loading';

const PhotoInformation = () => {
  const { photoId } = useContext(PhotoIdContext);

  const { error, loading, data } = useFetch('getPhotoStats', photoId);

  if (error) return <Err error={error} />;
  if (photoId !== '' && loading) return <Loading />;
  return (
    <div className="nutrition-information">
      <div className="title">
          Photo Information
      </div>
      { data && (
        <div>
          <div className="text">
            {`Downloads:  ${data.downloads}`}
          </div>
          <div className="text">
            {`Views:  ${data.views}`}
          </div>
          <div className="text">
            {`Likes:  ${data.likes}`}
          </div>
        </div>
      ) }
    </div>
  );
};

export default PhotoInformation;
