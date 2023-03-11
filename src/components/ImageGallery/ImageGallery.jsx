import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { PropTypes } from 'prop-types';

// У цьому коді використовується не React підхід до прокидувння методів,
// а саме функція resetList -> пркидується для батька(App), а сам App бере з цього елемента useRef,
//                !!!  НЕ ВИКОРИСТОВУВАИ ЦЕЙ КОД ДЛЯ ПРОДАКШИНУ !!!
//                 краще встанови useState для page i images в App

import { ImageGalleryList } from '../ImageGalleryList/ImageGalleryList';
import { Nothing } from '../Nothing/Nothing';

// Приклад використання prevValues
// import { usePreviousn } from '../../hooks';
// const prev = usePrevious({ value });

import { usePage, useCollection } from '../../hooks';
import { APIpixabay } from '../../services';
import { statusObj } from '../../constants';

export const ImageGallery = forwardRef(({ value, toggleBtn }, ref) => {
  const { IDLE, PENDING, RESOLVED, REJECTED, EMPTY } = statusObj;

  const [page, resetPage, incrementPage] = usePage();
  const [images, resetImages, addImages] = useCollection();

  const [status, setStatus] = useState(IDLE);
  const [isEnd, setIsEnd] = useState(false);

  const updateImages = async () => {
    const data = await APIpixabay.getPhotos(value, page);
    const { totalPage, hits } = data;
    await new Promise(r => setTimeout(r, 500));
    await addImages(hits);

    return totalPage;
  };

  useImperativeHandle(ref, () => ({
    resetList() {
      resetPage();
      resetImages();
    },
  }));

  useEffect(() => {
    if (value === '') return;

    (async () => {
      try {
        toggleBtn();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
});

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  toggleBtn: PropTypes.func.isRequired,
};
