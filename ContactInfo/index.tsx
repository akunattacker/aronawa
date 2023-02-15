import {
  ContactBody,
  ContactIcon,
  ContactInfoContainer,
  ContactInfoStyled,
  ContactItem,
  ContactList,
  ContactTitle,
} from '@/components/ContactInfo/ContactInfo.styles';
import Icon from 'ui/components/atoms/Icon';
import RenderIf from 'ui/helpers/RenderIf';

interface IProps {
  bgColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  whatsappTitle?: string;
  whatsappNumber?: string;
  whatsappIsActive?: boolean;
  whatsappBgColor?: string;
  whatsappTextColor?: string;
  phoneTitle?: string;
  phoneNumber?: string;
  phoneIsActive?: boolean;
  phoneBgColor?: string;
  phoneTextColor?: string;
  emailTitle?: string;
  emailName?: string;
  emailIsActive?: boolean;
  emailBgColor?: string;
  emailTextColor?: string;
}

const Index = ({
  bgColor,
  textColor,
  title,
  subtitle,
  whatsappTitle,
  whatsappNumber,
  whatsappBgColor,
  whatsappTextColor,
  phoneTitle,
  phoneNumber,
  phoneBgColor,
  phoneTextColor,
  emailTitle,
  emailName,
  emailBgColor,
  emailTextColor,
  emailIsActive,
  phoneIsActive,
  whatsappIsActive,
}: IProps) => {
  return (
    <ContactInfoStyled bgColor={bgColor}>
      <ContactInfoContainer>
        <ContactTitle textColor={textColor}>
          <h3>{title}</h3>
          <RenderIf isTrue={!!subtitle}>
            <p>{subtitle}</p>
          </RenderIf>
        </ContactTitle>
        <ContactList>
          <RenderIf isTrue={!!phoneIsActive}>
            <ContactItem href={`tel:${phoneNumber}`} bgColor={phoneBgColor}>
              <ContactIcon textColor={phoneTextColor}>
                <Icon name="phone-volume" size={24} color="#fff" />
              </ContactIcon>
              <ContactBody textColor={phoneTextColor}>
                <h5>{phoneTitle}</h5>
                <p>{phoneNumber}</p>
              </ContactBody>
            </ContactItem>
          </RenderIf>
          <RenderIf isTrue={!!whatsappIsActive}>
            <ContactItem href={`http://wa.me/${whatsappNumber}`} bgColor={whatsappBgColor}>
              <ContactIcon textColor={whatsappTextColor}>
                <Icon name="whatsapp" size={24} color="#fff" />
              </ContactIcon>
              <ContactBody textColor={whatsappTextColor}>
                <h5>{whatsappTitle}</h5>
                <p>{whatsappNumber}</p>
              </ContactBody>
            </ContactItem>
          </RenderIf>
          <RenderIf isTrue={!!emailIsActive}>
            <ContactItem href={`mailto:${emailName}`} bgColor={emailBgColor}>
              <ContactIcon textColor={emailTextColor}>
                <Icon name="envelope" size={24} color="#fff" />
              </ContactIcon>
              <ContactBody textColor={emailTextColor}>
                <h5>{emailTitle}</h5>
                <p>{emailName}</p>
              </ContactBody>
            </ContactItem>
          </RenderIf>
        </ContactList>
      </ContactInfoContainer>
    </ContactInfoStyled>
  );
};

export default Index;
