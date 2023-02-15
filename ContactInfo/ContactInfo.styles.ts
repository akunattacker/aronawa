import styled from '@emotion/styled';
import Color from 'ui/themes/Color';

interface IStyle {
  bgColor?: string;
  textColor?: string;
}

export const ContactInfoStyled = styled.div<IStyle>(({ bgColor = Color.navy[500] }) => ({
  paddingBottom: 24,
  paddingTop: 24,
  backgroundColor: bgColor,
  '@media (min-width: 768px)': {
    marginBottom: 24,
    marginTop: 24,
    paddingBottom: 32,
    paddingTop: 32,
  },
}));

export const ContactInfoContainer = styled.div({
  position: 'relative',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 1440,
  paddingLeft: 16,
  paddingRight: 16,
  '@media (min-width: 1200px)': {
    maxWidth: 1200,
  },
  '@media (min-width: 1441px)': {
    maxWidth: 1440,
  },
});

export const ContactTitle = styled.div<IStyle>(({ textColor = Color.white }) => ({
  color: textColor,
  textAlign: 'center',
  '& + *': {
    marginTop: 24,
  },
  h3: {
    fontSize: 18,
    fontFamily: '"geomanistmedium", sans-serif',
    '& + p': {
      fontSize: 14,
      marginTop: 8,
    },
    '@media (min-width: 768px)': {
      fontSize: 26,
      '& + p': {
        fontSize: 18,
        marginTop: 16,
      },
    },
  },
}));

export const ContactList = styled.div({
  display: 'grid',
  gap: 16,
  '@media (min-width: 992px)': {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 0,
    '& > * + *': {
      marginLeft: 16,
    },
  },
});

export const ContactItem = styled.a<IStyle>(({ bgColor = Color.navy[500] }) => ({
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: bgColor,
  borderRadius: 5,
  minWidth: 312,
  maxWidth: '100%',
}));

export const ContactIcon = styled.div<IStyle>(({ textColor }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `${textColor}26`,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  height: '100%',
  padding: '0 16px',
}));

export const ContactBody = styled.div<IStyle>(({ textColor = Color.white }) => ({
  color: textColor,
  padding: '8px 16px',
  flex: 1,
  h5: {
    fontSize: 14,
    fontWeight: 600,
  },
}));
