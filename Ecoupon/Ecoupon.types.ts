export interface IMerchantCoupon {
  id?: string;
  name?: string;
  code?: string;
}

export interface IECoupon {
  data?: IMerchantCoupon[];
}
