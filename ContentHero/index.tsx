import { useContentHero } from '@/components/ContentHero/ContentHero.action';
import {
  Banner,
  Content,
  Description,
  EmbedStyled,
  SectionGrid,
} from '@/components/ContentHero/ContentHero.styles';
import Image from '@/components/Image';
import { Subtitle } from '@/components/Product/Product.styles';
import Section from '@/components/Section';
import type { IBanner } from '@/interfaces/ibanners';
import { getFullPreviewLink, newTabLink } from '@/utils/targetLink';
import Button from 'ui/components/atoms/Button';
import RenderIf from 'ui/helpers/RenderIf';

interface IProps {
  title?: string;
  banner: IBanner;
  additional?: {
    title?: string;
    subTitle?: string;
  };
  description?: string;
}

const Index = ({ title, banner, additional, description }: IProps) => {
  const { height, ref, isShowMore, onShowMore } = useContentHero();
  return (
    <Section title={title}>
      <SectionGrid>
        <RenderIf isTrue={!!banner.isEmbed}>
          <EmbedStyled>
            <div dangerouslySetInnerHTML={{ __html: banner?.embed?.tag ?? '' }} />
          </EmbedStyled>
        </RenderIf>
        <RenderIf isTrue={!banner.isEmbed}>
          <Banner href={getFullPreviewLink(banner.link)} {...newTabLink(banner.link?.newTab)}>
            <Image
              src={banner.imageUrl}
              srcMobile={banner.imageUrlMobile}
              alt={banner.imageAlt}
              isResponsive
            />
          </Banner>
        </RenderIf>
        <Content>
          <RenderIf isTrue={!!additional?.subTitle}>
            <Subtitle>{additional?.subTitle}</Subtitle>
          </RenderIf>
          <RenderIf isTrue={!!additional?.title}>
            <h5>{additional?.title}</h5>
          </RenderIf>
          <RenderIf isTrue={!!description}>
            <Description ref={ref} isShowMore={isShowMore}>
              {description}
            </Description>
          </RenderIf>
          <RenderIf isTrue={height > 80 && !isShowMore}>
            <Button color="primary" variant="text" onClick={onShowMore}>
              Selengkapnya
            </Button>
          </RenderIf>
        </Content>
      </SectionGrid>
    </Section>
  );
};

export default Index;
