import React, { useContext, useState } from 'react';
import { SearchContext } from '../SearchContext';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { setSearchTerm: setAppSearchTerm } = useContext(SearchContext);

  function handleClearSearchTerm() {
    setSearchTerm('');
  }

  function handleUpdateSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const cleanedSearchTerm = searchTerm.trim();
    if (cleanedSearchTerm.length >= 1) {
      setAppSearchTerm(cleanedSearchTerm);
      handleClearSearchTerm();
    }
  }

  return (
    <form role="search" className="search-bar" onSubmit={handleSubmit}>
      <input
        aria-label="search text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        className="search-input"
        name="photo-search"
        onChange={handleUpdateSearchTerm}
        placeholder="Search for a Photo"
        type="search"
        value={searchTerm}
      />
      <input
        className="search-button"
        type="submit"
        value="Search"
      />
    </form>
  );
};

export default SearchBar;
