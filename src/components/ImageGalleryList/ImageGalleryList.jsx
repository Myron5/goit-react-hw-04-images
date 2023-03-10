import { PropTypes } from 'prop-types';

import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { PhotoList } from './ImageGalleryList.styled';

export const ImageGalleryList = ({ images, status, isEnd, handleLoad }) => {
  return (
    <>
      <PhotoList>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            bigImg={largeImageURL}
          />
        ))}
      </PhotoList>
      {status === 'resolved' && !isEnd && (
        <Button text="Load more" onClick={handleLoad} />
      )}
      {status === 'pending' && <Loader type="search" />}
    </>
  );
};

ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  status: PropTypes.string.isRequired,
  isEnd: PropTypes.bool.isRequired,
  handleLoad: PropTypes.func.isRequired,
};
