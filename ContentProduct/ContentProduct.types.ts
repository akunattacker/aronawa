import type { IBanner } from '@/interfaces/ibanners';
import type { ITargetLink } from '@/interfaces/itargetLink';

export interface IMadeProduct {
  code?: string;
  image?: {
    large?: string;
  };
}

interface IImages {
  type?: string;
  url?: string;
}

export interface IProduct {
  name?: string;
  skuNo?: string;
  imageUrl: string;
  images?: IImages[];
  imageUrlMobile: string;
  normalPrice?: number;
  specialPrice?: number;
  discountPercentage?: string;
  link?: any;
  title?: string;
  slug?: string;
  description?: string;
  remainingQty?: number;
  stat?: {
    totalReviews?: number;
    averageRatings?: number;
    percentageRatings?: number;
  };
  merchant?: {
    name?: string;
    storeDistrict?: {
      name?: string;
    };
  };
  made?: IMadeProduct;
}

export interface IContentProduct {
  title?: string;
  linkSeeAll?: ITargetLink;
  imageOnly?: boolean;
  slidesToShow?: number;
  data: IProduct[];
  banner?: IBanner;
  isVariableWidth?: boolean;
  isImageOnly?: boolean;
  hasBuyButton?: boolean;
  variant?: string;
}
