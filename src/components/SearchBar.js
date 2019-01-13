import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends PureComponent {
  constructor() {
    super();
    this.state = { searchTerm: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClearSearchTerm = this.handleClearSearchTerm.bind(this);
    this.handleUpdateSearchTerm = this.handleUpdateSearchTerm.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { setSearchTerm } = this.props;
    const cleanedSearchTerm = searchTerm.trim();
    if (cleanedSearchTerm.length >= 1) {
      setSearchTerm(cleanedSearchTerm);
      this.handleClearSearchTerm();
    }
  }

  handleClearSearchTerm = () => {
    this.setState(this.initialState);
  };

  handleUpdateSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <form role="search" className="search-bar" onSubmit={this.onSubmit}>
        <input
          aria-label="search text"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          className="search-input"
          name="photo-search"
          onChange={this.handleUpdateSearchTerm}
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
  }
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
