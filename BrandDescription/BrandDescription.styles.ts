import styled from '@emotion/styled';
import Color from 'ui/themes/Color';
import Radius from 'ui/themes/Radius';

interface IStyle {
  hasBanner?: boolean;
}

export const BrandDescriptionStyled = styled.div({
  position: 'relative',
});

export const BrandDescriptionContainer = styled.div({
  position: 'relative',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingLeft: 16,
  paddingRight: 16,
  '@media (min-width: 992px)': {
    maxWidth: 1440,
  },
  '@media (min-width: 1200px)': {
    maxWidth: 1200,
  },
  '@media (min-width: 1441px)': {
    maxWidth: 1440,
  },
});

export const BrandDescriptionWrapper = styled.div({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  paddingTop: 16,
  paddingBottom: 16,
  '@media (min-width: 768px)': {
    paddingTop: 24,
    paddingBottom: 24,
  },
});

export const Info = styled.div<IStyle>(({ hasBanner }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginLeft: 16,
  '@media (min-width: 768px)': {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: hasBanner ? 188 : 40,
  },
}));

export const Logo = styled.div<IStyle>(({ hasBanner }) => ({
  border: `1px solid ${Color.slate[300]}`,
  borderRadius: Radius.dull,
  display: 'flex',
  img: {
    borderRadius: Radius.dull,
    width: 68,
    height: 68,
  },
  '@media (min-width: 768px)': {
    ...(hasBanner && {
      position: 'absolute',
      left: 0,
      top: -74,
    }),
    img: {
      width: 148,
      height: 148,
    },
  },
}));

export const Name = styled.div({
  h2: {
    fontFamily: 'geomanistmedium, sans-serif',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  p: {
    fontSize: 12,
  },
  '@media (min-width: 768px)': {
    marginRight: 16,
    flex: 1,
    h2: {
      fontSize: 26,
    },
    p: {
      fontSize: 14,
      marginTop: 4,
    },
  },
});

export const Social = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginTop: 8,
  '& > * + *': {
    marginLeft: 24,
  },
  '@media (min-width: 768px)': {
    marginTop: 0,
  },
});

export const SocialLink = styled.a({
  display: 'block',
  '&:hover i': {
    color: Color.sky[500],
  },
});
