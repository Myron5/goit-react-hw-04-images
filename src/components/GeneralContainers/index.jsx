import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media, colors, adaptFonts } from '../../constants';

// ------------------------------------ App Box ----------------------------------

export const AppBox = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${colors.generalBackground};
`;

// ------------------------------------ Container ----------------------------------

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 10px;
  padding-right: 10px;

  max-width: 100%;

  @media screen and (min-width: ${Number.parseInt(media.mobile) + 96}px) {
    width: 396px;
  }

  @media screen and (min-width: ${Number.parseInt(media.tablet) + 40}px) {
    width: 800px;

    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: ${media.desktop}) {
    width: 1200px;

    padding-left: 20px;
    padding-right: 20px;
  }
`;

// ------------------------------------ For section ----------------------------------

const SectionBox = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: ${media.tablet}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (min-width: ${media.desktop}) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  @media screen and (min-width: ${media.tablet}) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${media.desktop}) {
    margin-bottom: 35px;
  }
`;

const H1 = styled.h1`
  color: ${colors.txtBlack};
  font-size: ${adaptFonts.md};
`;

// ------------------------------------ Section ----------------------------------

export const Section = ({ title, icon, children }) => {
  return (
    <SectionBox>
      <Container>
        {title && icon && (
          <FlexDiv>
            <H1>{title}</H1>
            {icon}
          </FlexDiv>
        )}

        {children}
      </Container>
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

// ------------------------------------ For header ----------------------------------

const HeaderBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;

  padding-top: 12px;
  padding-bottom: 12px;

  background-color: ${colors.accent};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: ${media.tablet}) {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media screen and (min-width: ${media.desktop}) {
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

// ------------------------------------ Header ----------------------------------

export const Header = ({ children }) => {
  return (
    <HeaderBox>
      <Container>{children}</Container>
    </HeaderBox>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

// ------------------------------------ THE END ----------------------------------
