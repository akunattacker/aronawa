import type { IProduct } from '@/components/ContentProduct/ContentProduct.types';
import type { IBanner } from '@/interfaces/ibanners';
import { getFullPreviewLink } from '@/utils/targetLink';

export const bannerListData = (data: IBanner[]): IProduct[] => {
  return data.map((item) => ({
    imageAlt: item.imageAlt || '',
    imageUrl: item.imageUrl,
    imageUrlMobile: item?.imageUrlMobile,
    linkImageOnly: getFullPreviewLink(item?.link),
    newTab: item?.link.newTab,
    embed: item?.embed?.tag,
    bannerTitle: item?.title,
    bannerDescription: item?.description,
  }));
};
