import type { IProduct } from '@/components/ContentProduct/ContentProduct.types';
import type { IBanner } from '@/interfaces/ibanners';
import { getFullPreviewLink } from '@/utils/targetLink';

export const productListData = (data: IProduct[]) => {
  return data.map((item) => {
    return {
      normalPrice: item?.normalPrice,
      discount: item?.discountPercentage,
      imageUrl: item?.imageUrl,
      imageUrlMobile: item?.imageUrlMobile,
      price: item?.specialPrice,
      title: item?.name,
      link: '/' + item.slug,
      ratingScore: item?.stat?.averageRatings,
      ratingCount: item?.stat?.totalReviews,
      ratingPercentage: item?.stat?.percentageRatings,
      linkImageOnly: getFullPreviewLink(item?.link),
      newTab: item?.link?.newTab,
      bannerTitle: item?.title,
      bannerDescription: item?.description,
      bbiImage: item?.made?.image?.large,
    };
  });
};

export const bannerListData = (data?: IBanner) => {
  if (data) {
    return {
      imageUrl: data.imageUrl,
      imageUrlMobile: data.imageUrlMobile,
      imageAlt: data.imageAlt,
      link: getFullPreviewLink(data.link),
      newTab: data.link.newTab,
      embed: data.embed?.tag,
    };
  }
  return undefined;
};
