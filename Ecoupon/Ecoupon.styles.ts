import styled from '@emotion/styled';
import Color from 'ui/themes/Color';
import Radius from 'ui/themes/Radius';

export const EcouponStyled = styled.div({
  padding: 16,
  backgroundColor: Color.slate['50'],
  marginTop: 16,
  marginBottom: 16,
  '@media (min-width: 992px)': {
    padding: '16px 24px',
  },
});

export const EcouponContainer = styled.div({
  position: 'relative',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media (min-width: 992px)': {
    maxWidth: 1440,
    paddingLeft: 16,
    paddingRight: 16,
  },
  '@media (min-width: 1200px)': {
    maxWidth: 1200,
  },
  '@media (min-width: 1441px)': {
    maxWidth: 1440,
  },
});

export const EcouponTitle = styled.div({
  h4: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 4,
  },
  '@media (min-width: 992px)': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const EcouponList = styled.div({
  marginTop: 12,
  '& .slick-slide': {
    paddingLeft: 8,
    paddingRight: 8,
    '&:first-of-type': {
      paddingLeft: 16,
    },
    '&:last-of-type': {
      paddingRight: 16,
    },
  },
  '& .slick-list': {
    marginLeft: '-8px !important',
    marginRight: '-8px !important',
  },
  '@media (max-width: 991.98px)': {
    marginLeft: -8,
    marginRight: -8,
    '& .slick-track': {
      width: '100% !important',
      display: 'flex !important',
    },
    '& .slick-slide': {
      width: 'auto !important',
    },
    '& .slick-list': {
      overflow: 'auto !important',
    },
  },
  '@media (min-width: 992px)': {
    marginLeft: 320,
    marginTop: 0,
    '& .slick-prev,& .slick-next': {
      backgroundColor: Color.white,
      width: 32,
      height: 32,
    },
    '& .slick-prev': {
      left: -40,
    },
    '& .slick-next': {
      right: -40,
    },
  },
});

export const CouponStyled = styled.div({
  backgroundColor: Color.white,
  borderRadius: Radius.blunt,
  border: `1px solid ${Color.slate[300]}`,
  position: 'relative',
  display: 'flex',
  alignItems: 'stretch',
  '&:before, &:after': {
    content: '""',
    backgroundColor: Color.slate[50],
    width: 16,
    height: 16,
    borderRadius: '50%',
    display: 'block',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:before': {
    left: -8,
    borderRight: `1px solid ${Color.slate[300]}`,
  },
  '&:after': {
    right: -8,
    borderLeft: `1px solid ${Color.slate[300]}`,
  },
});

export const Info = styled.div({
  padding: '12px 16px',
  flex: 1,
  paddingRight: 8,
  p: {
    fontWeight: 600,
    fontSize: 12,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'normal',
  },
});

export const Code = styled.div({
  backgroundColor: Color.sky[50],
  padding: '10px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: Radius.blunt,
  color: Color.primary.default,
  marginTop: 4,
  cursor: 'pointer',
  '@media (max-width: 991.98px)': {
    minWidth: 160,
  },
  span: {
    fontFamily: 'Menlo',
    fontWeight: 700,
    letterSpacing: 1,
    marginRight: 8,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export const Action = styled.div({
  borderLeft: `1px dashed ${Color.slate[300]}`,
  display: 'flex',
  alignItems: 'center',
  padding: 16,
  cursor: 'pointer',
  paddingLeft: 8,
  i: {
    fontSize: 18,
  },
});

export const EcouponModal = styled.div({
  h3: {
    fontFamily: 'geomanistmedium,sans-serif',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 16,
  },
});

export const EcouponPeriode = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: -16,
  marginRight: -16,
  padding: 16,
  marginBottom: 16,
  paddingTop: 0,
  borderBottom: `1px solid ${Color.slate[300]}`,
  '> div': {
    '& + div': { borderLeft: `1px solid ${Color.slate[300]}`, paddingLeft: 16, marginLeft: 16 },
  },
  label: {
    color: Color.font.pencil,
    marginBottom: 4,
  },
  p: {
    fontWeight: 600,
  },
});
