import { useState, useRef } from 'react';
import { useToggle } from '../hooks';

import { AppBox, Header, Section } from './GeneralContainers';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [query, setQuery] = useState('');
  const [disableSearch, toggleDisableSearch] = useToggle(false);

  const listRef = useRef();

  const handleOnSubmit = async e => {
    e.preventDefault();
    const value = e.currentTarget.elements.search.value;
    setQuery(value);
    listRef.current.resetList();
    // resetPage();
    // resetImages();
  };

  return (
    <AppBox>
      <Header>
        <SearchBar disableValue={disableSearch} onSubmit={handleOnSubmit} />
      </Header>
      <Section>
        <ImageGallery
          ref={listRef}
          value={query}
          toggleBtn={toggleDisableSearch}
        />
      </Section>
    </AppBox>
  );
};
