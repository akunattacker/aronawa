import type { IMerchantCoupon } from '@/components/Ecoupon/Ecoupon.types';
import { copyToClipboard } from 'apps-lib';
import { useState } from 'react';
import { toast, toastBody } from 'ui/components/atoms/Toast';

export const useEcoupon = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentEcoupon, setCurrentEcoupon] = useState<IMerchantCoupon | null>(null);
  const onCopy = (coupon: IMerchantCoupon) => () => {
    copyToClipboard(coupon?.code ?? '');
    toast.success(toastBody(true, 'Kode e-coupon berhasil disalin.'));
    setIsOpen(false);
  };
  const onClose = () => {
    setCurrentEcoupon(null);
    setIsOpen(false);
  };
  const onOpen = (coupon: IMerchantCoupon) => () => {
    setCurrentEcoupon(coupon);
    setIsOpen(true);
  };

  return { isOpen, onClose, currentEcoupon, onCopy, onOpen };
};
