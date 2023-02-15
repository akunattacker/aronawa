import styled from '@emotion/styled';

export const Title = styled.h2({
  fontFamily: 'geomanistmedium, sans-serif',
  fontSize: 20,
  textAlign: 'center',
  '@media (min-width: 768px)': {
    fontSize: 28,
  },
});

export const BreadcrumbWrapper = styled.div({
  marginTop: 4,
  display: 'flex',
  justifyContent: 'center',
  '& div': {
    fontSize: 12,
  },
});
