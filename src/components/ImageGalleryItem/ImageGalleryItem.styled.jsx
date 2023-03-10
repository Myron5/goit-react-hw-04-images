import styled from 'styled-components';

export const ItemBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 376px;
  height: 250px;

  overflow: hidden;

  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;
