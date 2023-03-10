import { PropTypes } from 'prop-types';
import { Oval, CirclesWithBar } from 'react-loader-spinner';

import { CenterBox } from './Loader.styled';
import { colors } from '../../constants';

export const Loader = ({ type = 'search' }) => {
  if (type === 'photo')
    return (
      <CenterBox>
        <Oval
          height={80}
          width={80}
          color={colors.accent}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor={colors.txtGrey}
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </CenterBox>
    );

  if (type === 'search')
    return (
      <CenterBox>
        <CirclesWithBar
          height="100"
          width="100"
          color={colors.accent}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </CenterBox>
    );
};

Loader.propTypes = {
  type: PropTypes.string,
};
