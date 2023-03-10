import { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Modal } from '../Modal/Modal';
import { Loader } from '../Loader/Loader';
import { ItemBox, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    modal: false,
    imgIsLoaded: false,
  };

  handleOpenModal = () => {
    this.setState({ modal: true });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  handleImageOnLoad = () => {
    this.setState({ imgIsLoaded: true });
  };

  render() {
    const { smallImg, bigImg } = this.props;

    return (
      <>
        <ItemBox onClick={this.handleOpenModal}>
          {!this.state.imgIsLoaded && <Loader type="photo" />}
          <Image
            src={smallImg}
            onLoad={this.handleImageOnLoad}
            show={this.state.imgIsLoaded}
            alt=""
          />
        </ItemBox>
        {this.state.modal && (
          <Modal bigImg={bigImg} onClose={this.handleCloseModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
};
