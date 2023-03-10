import { Component } from 'react';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import disableScroll from 'disable-scroll';

import { MdClose } from 'react-icons/md';
import { Loader } from '../Loader/Loader';
import {
  BigImage,
  BackDrop,
  ModalBox,
  CloseButton,
  ImageThumb,
} from './Modal.styled';

export class Modal extends Component {
  state = {
    imgIsLoaded: false,
  };

  handleImageOnLoad = () => {
    this.setState({ imgIsLoaded: true });
  };

  handleOnPressEsc = e => {
    const { onClose } = this.props;
    if (e.code === 'Escape') onClose();
  };

  componentDidMount() {
    disableScroll.on();
    document.addEventListener('keydown', this.handleOnPressEsc);
  }

  componentWillUnmount() {
    disableScroll.off();
    document.removeEventListener('keydown', this.handleOnPressEsc);
  }

  render() {
    const { bigImg, onClose } = this.props;

    return createPortal(
      <BackDrop onClick={onClose}>
        <ModalBox>
          {this.state.imgIsLoaded && (
            <CloseButton onClick={onClose}>
              <MdClose />
            </CloseButton>
          )}
          <ImageThumb>
            {!this.state.imgIsLoaded && <Loader type="photo" />}
            <BigImage
              src={bigImg}
              onLoad={this.handleImageOnLoad}
              show={this.state.imgIsLoaded}
              alt=""
            />
          </ImageThumb>
        </ModalBox>
      </BackDrop>,
      document.querySelector('#modal-img-root')
    );
  }
}

Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
