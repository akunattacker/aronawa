import type { IProduct } from '@/components/ContentProduct/ContentProduct.types';
import type { ITargetLink } from '@/interfaces/itargetLink';

export interface IEtalaseItem {
  title: string;
  isActive?: boolean;
  linkSeeAll?: ITargetLink;
  product: IProduct[];
}

export interface IEtalase {
  hasTitle?: boolean;
  isMobile?: boolean;
  onSetActive?: () => void;
  etalase: IEtalaseItem[];
}
