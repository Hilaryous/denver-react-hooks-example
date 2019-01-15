import Unsplash from 'unsplash-js';
import { useEffect, useState } from 'react';
import { API_URL, API_ACCESS_KEY, API_SECRET_KEY } from './constants';

const unsplash = new Unsplash({
  applicationId: `${API_ACCESS_KEY}`,
  secret: `${API_SECRET_KEY}`,
  callbackUrl: `${API_URL}`,
  headers: {
    'Accept-Version': 'v1',
  },
});

const unsplashFunc = {
  listPhotos: unsplash.photos.listPhotos,
  searchPhotos: unsplash.search.photos,
  getPhotoStats: unsplash.photos.getPhotoStats,
};

const getParams = (type, input) => {
  let params = [];
  if (type === 'listPhotos') {
    params = [1, 10, 'latest'];
  } else if (type === 'searchPhotos') {
    params = [input, 1, 10];
  } else if (type === 'getPhotoStats' && input.length > 1) {
    params = [input];
  }
  return params;
};

const useFetch = (type, input) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fn = unsplashFunc[type];
    const params = getParams(type, input);
    if (params.length < 1) return;
    const fetchAsync = async () => {
      setLoading(true);
      try {
        const response = await fn(...params);
        if (response.ok) {
          const json = await response.json();
          const responseData = type === 'searchPhotos' ? json.results : json;
          setData(responseData);
        } else {
          setError(String(new Error(response.statusText)));
          // eslint-disable-next-line no-console
          console.error(new Error(response.statusText));
        }
      } catch (e) {
        setError(String(e));
        // eslint-disable-next-line no-console
        console.error(e);
      }
      setLoading(false);
    };
    fetchAsync();
  }, [type, input]);
  return { error, loading, data };
};

export default useFetch;
