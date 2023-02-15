import styled from '@emotion/styled';

interface IStyle {
  isReverse?: boolean;
}

export const DisplayContentStyled = styled.div({
  position: 'relative',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '1fr',
  gap: 16,
  '@media (min-width: 768px)': {
    gap: 32,
    gridTemplateColumns: '1fr 1fr',
  },
});

export const ImageWrapper = styled.div<IStyle>(({ isReverse }) => ({
  order: 1,
  '@media (min-width: 768px)': {
    order: isReverse ? 2 : 1,
  },
}));

export const DisplayContentWrapper = styled.div<IStyle>(({ isReverse }) => ({
  position: 'relative',
  order: isReverse ? 1 : 2,
  h3: {
    fontFamily: 'geomanistmedium, sans-serif',
    fontSize: 18,
    lineHeight: '24px',
    marginBottom: 8,
  },
  p: {
    whiteSpace: 'pre-line',
    lineHeight: '20px',
    fontSize: 14,
    '& + p': {
      marginTop: 16,
    },
    '& + a, & + button': {
      marginTop: 16,
    },
  },
  '@media (min-width: 768px)': {
    h3: {
      fontSize: 26,
      lineHeight: '32px',
      marginBottom: 16,
    },
    p: {
      lineHeight: '28px',
      fontSize: 18,
      '& + a, & + button': {
        marginTop: 24,
      },
    },
  },
}));
