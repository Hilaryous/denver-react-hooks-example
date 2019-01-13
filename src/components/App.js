import React, { Component, Fragment } from 'react';
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';
import PhotoInformation from './PhotoInformation';

class App extends Component {
  constructor() {
    super();
    this.state = { searchTerm: '', photoId: '' };
    this.handleSetSearchTerm = this.handleSetSearchTerm.bind(this);
    this.handleSetPhotoId = this.handleSetPhotoId.bind(this);
  }

  handleSetSearchTerm(searchTerm) {
    this.setState(() => ({
      searchTerm,
    }));
  }

  handleSetPhotoId(photoId) {
    this.setState(() => ({
      photoId,
    }));
  }

  render() {
    const { searchTerm, photoId } = this.state;
    return (
      <Fragment>
        <SearchBar setSearchTerm={this.handleSetSearchTerm} />
        <div className="content">
          <PhotoList searchTerm={searchTerm} setPhotoInfoId={this.handleSetPhotoId} />
          <PhotoInformation photoId={photoId} />
        </div>
      </Fragment>
    );
  }
}

export default App;
