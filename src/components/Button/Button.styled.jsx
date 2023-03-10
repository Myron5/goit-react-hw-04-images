import styled from 'styled-components';
import { colors, other } from '../../constants';

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreBtn = styled.button`
  display: inline-flex;
  align-tems: center;
  gap: 10px;

  padding: 8px 16px;

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: ${colors.txtWhite};

  border-radius: 2px;
  background-color: #3f51b5;
  border: 0;
  cursor: pointer;

  opacity: 0.7;
  box-shadow: none;
  transition: opacity ${other.animation}, box-shadow ${other.animation};

  &:hover,
  &:focus {
    opacity: 1;
    box-shadow: ${other.boxShadow};
  }
`;

export const DecorSpan = styled.span`
  display: inline-block;
`;
