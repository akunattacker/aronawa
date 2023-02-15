import type { IBanner } from '@/interfaces/ibanners';

export interface IContentColumn {
  title?: string;
  data: IBanner[];
  variant?: string;
  isNoGutter?: boolean;
}
