import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;

  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  align-self: flex-end;
  transform: translate(0, 100%);

  color: #fff;
  border: none;
  background-color: transparent;
`;

export const ImageThumb = styled.div`
  width: 800px;
  height: 510px;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }

  @media only screen and (max-height: 510px) {
    height: 100%;
  }
`;

export const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: ${({ show }) => (show ? 'block' : 'none')};

  cursor: default;
`;
