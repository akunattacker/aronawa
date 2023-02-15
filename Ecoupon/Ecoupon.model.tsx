import type { IMerchantCoupon } from '@/components/Ecoupon/Ecoupon.types';

export const generateSliderSetting = (data: IMerchantCoupon[]) => ({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: data?.length > 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        infinite: data?.length > 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        unslick: true,
        infinite: false,
      },
    },
  ],
});
