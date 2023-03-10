import { Component } from 'react';
import { PropTypes } from 'prop-types';

import { APIpixabay } from '../../services';
import { ImageGalleryList } from '../ImageGalleryList/ImageGalleryList';
import { Nothing } from '../Nothing/Nothing';

export class ImageGallery extends Component {
  state = {
    page: 1,
    status: 'idle',
    images: [],
    isEnd: false,
  };

  handleOnLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  // shouldComponentUpdate(prevProps, prevState) {
  //   const { value } = this.props;
  //   const { page, images } = this.state;

  //   if (
  //     prevProps.value === value &&
  //     prevState.page === page &&
  //     images.length !== 0
  //   ) {
  //     console.log(false);
  //     return false;
  //   }
  //   return true;
  // }

  async componentDidUpdate(prevProps, prevState) {
    const promisedSetState = newState =>
      new Promise(resolve => this.setState(newState, resolve));

    const { value, toggleBtn } = this.props;
    const { page, images } = this.state;

    if (value === '') return;

    if (prevProps.value !== value || prevState.page !== page) {
      try {
        toggleBtn();

        const newState =
          prevProps.value === value
            ? { status: 'pending', isEnd: false }
            : {
                status: 'pending',
                isEnd: false,
                page: 1,
                images: [],
              };
        await promisedSetState(newState);
        const data = await APIpixabay.getPhotos(value, this.state.page);
        await new Promise(r => setTimeout(r, 500));

        const newStatus = data.totalPage === 0 ? 'empty' : 'resolved';
        const newImages = [...images, ...data.hits];

        this.setState({
          status: newStatus,
          images: newImages,
          isEnd: data.totalPage === this.state.page,
        });
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.log(error);
      } finally {
        toggleBtn();
      }
    }
  }

  render() {
    const { status, images, isEnd } = this.state;

    if (status === 'resolved' || status === 'pending')
      return (
        <ImageGalleryList
          images={images}
          status={status}
          isEnd={isEnd}
          handleLoad={this.handleOnLoadMore}
        />
      );

    if (status === 'empty') {
      return <Nothing />;
    }

    if (status === 'rejected')
      return <div>Щось пішло не так, перезавантажте сторінку ...</div>;
  }
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  toggleBtn: PropTypes.func.isRequired,
};
