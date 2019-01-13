import React from 'react';
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';
import PhotoInformation from './PhotoInformation';
import { SearchProvider } from '../SearchContext';
import { PhotoIdProvider } from '../PhotoIdContext';

const App = () => (
  <SearchProvider>
    <SearchBar />
    <div className="content">
      <PhotoIdProvider>
        <PhotoList />
        <PhotoInformation />
      </PhotoIdProvider>
    </div>
  </SearchProvider>
);

export default App;
