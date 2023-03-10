import { Component } from 'react';

import { AppBox, Header, Section } from './GeneralContainers';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    disableSearch: false,
  };

  handleOnSubmit = async e => {
    e.preventDefault();
    const value = e.currentTarget.elements.search.value;
    this.setState({ searchQuery: value });
  };

  toggleDisableSearch = () => {
    this.setState(prev => ({ disableSearch: !prev.disableSearch }));
  };

  render() {
    return (
      <AppBox>
        <Header>
          <SearchBar
            disableValue={this.state.disableSearch}
            onSubmit={this.handleOnSubmit}
          />
        </Header>
        <Section>
          <ImageGallery
            value={this.state.searchQuery}
            toggleBtn={this.toggleDisableSearch}
          />
        </Section>
      </AppBox>
    );
  }
}
