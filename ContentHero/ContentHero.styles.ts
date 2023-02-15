import styled from '@emotion/styled';

interface IStyle {
  isShowMore?: boolean;
}

export const SectionGrid = styled.div({
  position: 'relative',
  display: 'grid',
  gap: 16,
  '@media (min-width: 768px)': {
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
  },
  '@media (min-width: 992px)': {
    gridTemplateColumns: '2fr 1fr',
  },
});

export const Banner = styled.a({
  display: 'block',
  position: 'relative',
  width: '100%',
  img: {
    width: '100%',
  },
});

export const EmbedStyled = styled.div({
  iframe: {
    width: '100%',
  },
  '@media (min-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    height: 320,
    '& > div:first-of-type': {
      position: 'relative',
      paddingTop: '56.25%',
      flex: 1,
      iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
      },
    },
  },
  '@media (min-width: 992px)': {
    height: 450,
  },
});

export const Content = styled.div({
  paddingLeft: 16,
  paddingRight: 16,
  h5: {
    fontSize: 14,
    fontWeight: 600,
  },
  '@media (min-width: 768px)': {
    paddingLeft: 0,
    paddingRight: 0,
    h5: {
      fontSize: 20,
    },
  },
});

export const Description = styled.p<IStyle>(({ isShowMore }) => ({
  marginTop: 8,
  fontSize: 12,
  '@media (min-width: 768px)': {
    fontSize: 14,
  },
  ...(!isShowMore && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'normal',
    marginBottom: 8,
  }),
}));
