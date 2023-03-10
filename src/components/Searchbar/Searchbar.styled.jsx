import styled from 'styled-components';

import { colors, other } from '../../constants';

export const Form = styled.form`
  display: inline-flex;

  height: 30px;

  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 210px;
  height: 100%;

  padding: 10px 10px 13px 10px;
  background-color: ${colors.generalBackground};
  border: none;
`;

export const Button = styled.button`
  width: 30px;
  align-self: stretch;

  border: none;
  background-color: ${colors.generalBackground};

  opacity: 0.7;
  box-shadow: none;
  transition: opacity ${other.animation}, box-shadow ${other.animation};

  &:hover,
  &:focus {
    opacity: 1;
    box-shadow: ${other.boxShadow};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
