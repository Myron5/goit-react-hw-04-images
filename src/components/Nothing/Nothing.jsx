import nothingImg from '../../images/nothing.png';
import { Box, Image, DecorSpan } from './Nothing.styled';

export const Nothing = () => {
  return (
    <Box>
      <Image src={nothingImg} alt="" />
      <DecorSpan>Ми нічого не знайшли за вашим запитом ...</DecorSpan>
    </Box>
  );
};
