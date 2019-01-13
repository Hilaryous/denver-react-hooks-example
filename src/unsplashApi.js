import Unsplash from 'unsplash-js';
import { API_URL, API_ACCESS_KEY, API_SECRET_KEY } from './constants';

const unsplash = new Unsplash({
  applicationId: `${API_ACCESS_KEY}`,
  secret: `${API_SECRET_KEY}`,
  callbackUrl: `${API_URL}`,
  headers: {
    'Accept-Version': 'v1',
  },
});

export const getPhotos = (cb) => {
  const fetchAsync = async () => {
    try {
      const response = await unsplash.photos.listPhotos(1, 10, 'latest');
      if (response.ok && response.status >= 200 && response.status < 300) {
        const json = await response.json();
        cb(json);
        return;
      }
      throw new Error(response.statusText);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };
  return fetchAsync();
};

export const searchPhotos = (searchTerm, cb) => {
  const fetchAsync = async () => {
    try {
      const response = await unsplash.search.photos(searchTerm, 1, 10);
      if (response.ok && response.status >= 200 && response.status < 300) {
        const json = await response.json();
        cb(json.results);
        return;
      }
      throw new Error(response.statusText);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };
  return fetchAsync();
};

export const getPhotoStats = (id, cb) => {
  const fetchAsync = async () => {
    try {
      const response = await unsplash.photos.getPhotoStats(id);
      if (response.ok && response.status >= 200 && response.status < 300) {
        const json = await response.json();
        cb(json);
        return;
      }
      throw new Error(response.statusText);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };
  return fetchAsync();
};

export default undefined;
