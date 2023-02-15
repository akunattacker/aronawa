import type { IMainBannerItem } from '@/components/MainBanner/MainBanner.types';

export interface IContactBrandDescription {
  type?: TSocialMedia;
  link?: string;
  showLink?: boolean;
}

export interface IBrandDescription {
  banners: IMainBannerItem[];
  name?: string;
  description?: string;
  logo: string;
  image: {
    imageUrl: string;
    imageUrlMobile: string;
  };
  socialMedia: IContactBrandDescription[];
}

export type TSocialMedia = (typeof SocialMediaEnum)[keyof typeof SocialMediaEnum];

export enum SocialMediaEnum {
  Facebook = 'facebook',
  Youtube = 'youtube',
  Instagram = 'instagram',
  Twitter = 'twitter',
}
