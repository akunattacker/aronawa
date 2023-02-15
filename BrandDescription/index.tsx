import {
  BrandDescriptionContainer,
  BrandDescriptionStyled,
  BrandDescriptionWrapper,
  Info,
  Logo,
  Name,
  Social,
  SocialLink,
} from '@/components/BrandDescription/BrandDescription.styles';
import type { IBrandDescription } from '@/components/BrandDescription/BrandDescription.types';
import Image from '@/components/Image';
import { MainBannerStyled } from '@/components/MainBanner/MainBanner.styles';
import Icon from 'ui/components/atoms/Icon';
import Carousel from 'ui/components/molecules/Carousel';
import RenderIf from 'ui/helpers/RenderIf';

const Index = ({ banners, name, description, image, socialMedia }: IBrandDescription) => {
  return (
    <BrandDescriptionStyled>
      <RenderIf isTrue={banners.length > 0}>
        <MainBannerStyled isBrandPage>
          <Carousel images={banners} width={1600} height={400} dots infinite autoplay />
        </MainBannerStyled>
      </RenderIf>
      <BrandDescriptionContainer>
        <BrandDescriptionWrapper>
          <Logo hasBanner={banners.length > 0}>
            <Image
              src={image.imageUrl}
              srcMobile={image.imageUrlMobile}
              alt={name ?? 'Logo'}
              width={148}
              height={148}
            />
          </Logo>
          <Info hasBanner={banners.length > 0}>
            <Name>
              <h2>{name}</h2>
              <RenderIf isTrue={!!description}>
                <p>{description}</p>
              </RenderIf>
            </Name>
            <Social>
              {socialMedia.map((item, index) => (
                <RenderIf isTrue={!item.showLink} key={index}>
                  <SocialLink
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    aria-label={item.type}
                  >
                    <Icon name={item.type} size={20} color="#7C8187" />
                  </SocialLink>
                </RenderIf>
              ))}
            </Social>
          </Info>
        </BrandDescriptionWrapper>
      </BrandDescriptionContainer>
    </BrandDescriptionStyled>
  );
};

export default Index;
