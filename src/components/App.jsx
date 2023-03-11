import { useState } from 'react';
import { useToggle, usePage, useCollection } from '../hooks';

import { AppBox, Header, Section } from './GeneralContainers';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [query, setQuery] = useState('');
  const [disableSearch, toggleDisableSearch] = useToggle(false);

  const [page, resetPage, incrementPage] = usePage();
  const [images, resetImages, addImages] = useCollection();

  const handleOnSubmit = async e => {
    e.preventDefault();
    const value = e.currentTarget.elements.search.value;
    setQuery(value);
    resetPage();
    resetImages();
  };

  return (
    <AppBox>
      <Header>
        <SearchBar disableValue={disableSearch} onSubmit={handleOnSubmit} />
      </Header>
      <Section>
        <ImageGallery
          value={query}
          toggleBtn={toggleDisableSearch}
          useHookPage={[page, resetPage, incrementPage]}
          useHookImages={[images, resetImages, addImages]}
        />
      </Section>
    </AppBox>
  );
};
