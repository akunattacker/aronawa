import styled from '@emotion/styled';
import Color from 'ui/themes/Color';

export const EtalaseStyled = styled.div({
  position: 'relative',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 1440,
  padding: 16,
  paddingTop: 0,
  display: 'grid',
  '@media (min-width: 768px)': {
    paddingTop: 24,
    paddingBottom: 24,
  },
  '@media(min-width: 992px)': {
    gridTemplateColumns: '224px 1fr',
    gap: 32,
  },
  '@media (min-width: 1200px)': {
    maxWidth: 1200,
  },
  '@media (min-width: 1441px)': {
    maxWidth: 1440,
  },
});

export const ShortcutStyled = styled.div({
  position: 'relative',
});

export const ShortcutWrapper = styled.div({
  h3: {
    fontFamily: 'geomanistbook, sans-serif',
    marginBottom: 16,
    fontSize: 16,
    '@media(min-width: 992px)': {
      fontSize: 20,
    },
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    '& li + li': {
      marginTop: 16,
      '@media (min-width: 768px)': {
        marginTop: 8,
      },
    },
    a: {
      color: Color.font.ink,
      cursor: 'pointer',
      '&:hover': {
        color: Color.sky[500],
      },
      '&.active': {
        color: Color.sky[500],
        fontWeight: 600,
      },
    },
  },
});

export const CatalogStyled = styled.div({
  marginTop: -48,
  '& > div': {
    paddingTop: 48,
    '& > div': {
      padding: 0,
    },
  },
  '@media (max-width: 767.98px)': {
    marginTop: 0,
    '& > div': {
      paddingTop: 16,
      '& > div': {
        marginLeft: -16,
        marginRight: -16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        '& > div:first-of-type': {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
});

export const ProductWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginLeft: -16,
  marginRight: -16,
  paddingLeft: 16,
  paddingRight: 16,
  borderTop: `1px solid ${Color.slate[300]}`,
  paddingTop: 16,
  '&:first-of-type, &:nth-of-type(2)': {
    borderTop: 0,
    paddingTop: 0,
  },
  '@media (min-width: 768px)': {
    borderTop: 0,
    paddingTop: 0,
    '&:nth-child(-n+5)': {
      borderBottom: `1px solid ${Color.slate[300]}`,
      paddingBottom: 16,
    },
  },
});

export const CatalogProduct = styled.div({
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(2,1fr)',
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(5,1fr)',
  },
});

export const ShortcutButton = styled.div({
  borderBottom: `1px solid ${Color.slate[300]}`,
  padding: 16,
  background: Color.white,
  marginLeft: -16,
  marginRight: -16,
});
