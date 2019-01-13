import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchContext = React.createContext(null);

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSetSearchTerm(term) {
    setSearchTerm(term);
  }

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm: handleSetSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SearchContext, SearchProvider };
