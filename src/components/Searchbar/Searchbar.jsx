import { PropTypes } from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Form, Input, Button, FlexBox } from './Searchbar.styled';

export const SearchBar = ({ disableValue, onSubmit }) => {
  return (
    <FlexBox>
      <Form onSubmit={onSubmit}>
        <Button disabled={disableValue} type="submit">
          <MdSearch />
        </Button>
        <Input
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </FlexBox>
  );
};

SearchBar.propTypes = {
  disableValue: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
