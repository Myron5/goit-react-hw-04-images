import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { ImageGalleryList } from '../ImageGalleryList/ImageGalleryList';
import { Nothing } from '../Nothing/Nothing';

import { usePrevious, usePage, useCollection } from '../../hooks';
import { APIpixabay } from '../../services';
import { statusObj } from '../../constants';

export const ImageGallery = ({
  value,
  toggleBtn,
  useHookPage,
  useHookImages,
}) => {
  const { IDLE, PENDING, RESOLVED, REJECTED, EMPTY } = statusObj;

  // const [page, resetPage, incrementPage] = usePage();
  // const [images, resetImages, addImages] = useCollection();

  const [page, resetPage, incrementPage] = useHookPage;
  const [images, resetImages, addImages] = useHookImages;

  const [status, setStatus] = useState(IDLE);
  const [isEnd, setIsEnd] = useState(false);
  const prev = usePrevious({ value });

  const updateImages = async () => {
    const data = await APIpixabay.getPhotos(value, page);
    const { totalPage, hits } = data;
    await new Promise(r => setTimeout(r, 500));
    await addImages(hits);

    return totalPage;
  };

  useEffect(() => {
    if (value === '') return;

    (async () => {
      try {
        toggleBtn();

        if (prev.value !== value) {
          resetPage();
          resetImages();
        }

        setStatus(PENDING);
        setIsEnd(false);

        const totalPage = await updateImages();

        setIsEnd(totalPage === page);
        setStatus(totalPage === 0 ? EMPTY : RESOLVED);
      } catch (error) {
        setStatus(REJECTED);
        console.log(error);
      } finally {
        toggleBtn();
      }
    })();
  }, [value, page]);

  if (status === IDLE) {
    return <ul></ul>;
  }

  if (status === PENDING || status === RESOLVED) {
    return (
      <ImageGalleryList
        images={images}
        status={status}
        isEnd={isEnd}
        handleLoad={incrementPage}
      />
    );
  }

  if (status === REJECTED) {
    return <div>Щось пішло не так, перезавантажте сторінку ...</div>;
  }

  if (status === EMPTY) {
    return <Nothing />;
  }
};

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  toggleBtn: PropTypes.func.isRequired,
};
