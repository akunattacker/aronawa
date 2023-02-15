import {
  DisplayContentStyled,
  DisplayContentWrapper,
  ImageWrapper,
} from '@/components/DisplayContent/DisplayContent.styles';
import Image from '@/components/Image';
import Section from '@/components/Section';
import { newTabLink } from '@/utils/targetLink';
import Button from 'ui/components/atoms/Button';
import RenderIf from 'ui/helpers/RenderIf';

interface IProps {
  title?: string;
  content?: string;
  banner: {
    imageUrl: string;
    imageUrlMobile: string;
  };
  isReverse?: boolean;
  buttonText?: string;
  link?: string;
  isNewTab?: boolean;
}

const contentSpacing = (value: string) => {
  return value.replace(/\n/g, '<p />');
};

const Index = ({ title, content, banner, isReverse, buttonText, link, isNewTab }: IProps) => {
  return (
    <Section isLarge>
      <DisplayContentStyled>
        <ImageWrapper isReverse={isReverse}>
          <Image
            src={banner.imageUrl}
            srcMobile={banner.imageUrlMobile}
            alt={title ?? 'Banner'}
            isResponsive
          />
        </ImageWrapper>
        <DisplayContentWrapper isReverse={isReverse}>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: contentSpacing(content ?? '') }} />
          <RenderIf isTrue={!!buttonText}>
            <Button as="a" href={link} color="primary" {...newTabLink(isNewTab)}>
              {buttonText}
            </Button>
          </RenderIf>
        </DisplayContentWrapper>
      </DisplayContentStyled>
    </Section>
  );
};

export default Index;
