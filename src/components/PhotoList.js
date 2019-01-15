import React, { useContext } from 'react';
import useFetch from '../fetchHook';
import Photo from './Photo';
import { SearchContext } from '../SearchContext';
import Err from './Err';
import Loading from './Loading';
import NotFound from './NoResultsFound';

const Photos = () => {
  const { searchTerm } = useContext(SearchContext);
  const apiRequestType = searchTerm.length > 1 ? 'searchPhotos' : 'listPhotos';

  const { error, loading, data } = useFetch(apiRequestType, searchTerm);

  if (error) return <Err error={error} />;
  if (loading) return <Loading />;
  if (data.length < 1) return <NotFound />;
  return (
    <div className="photo-list">
      { data.map(photo => (
        <Photo
          key={photo.id}
          photo={photo}
        />
      ))}
    </div>
  );
};

export default Photos;
