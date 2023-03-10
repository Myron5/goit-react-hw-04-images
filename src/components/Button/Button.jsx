import { PropTypes } from 'prop-types';
import { MdOutlineFileDownload } from 'react-icons/md';
import { CenterBox, LoadMoreBtn, DecorSpan } from './Button.styled';

export const Button = ({ text, onClick }) => {
  return (
    <CenterBox>
      <LoadMoreBtn onClick={onClick}>
        <DecorSpan>{text}</DecorSpan>
        <DecorSpan>
          <MdOutlineFileDownload />
        </DecorSpan>
      </LoadMoreBtn>
      ;
    </CenterBox>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
