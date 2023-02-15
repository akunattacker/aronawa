import { useEcoupon } from '@/components/Ecoupon/Ecoupon.action';
import { generateSliderSetting } from '@/components/Ecoupon/Ecoupon.model';
import {
  EcouponContainer,
  EcouponList,
  EcouponModal,
  EcouponPeriode,
  EcouponStyled,
  EcouponTitle,
} from '@/components/Ecoupon/Ecoupon.styles';
import type { IECoupon } from '@/components/Ecoupon/Ecoupon.types';
import Coupon from '@/components/Ecoupon/Partials/Coupon';
import Button from 'ui/components/atoms/Button';
import Carousel from 'ui/components/molecules/Carousel';
import Modal from 'ui/components/molecules/Modal';

const Index = ({ data }: IECoupon) => {
  const { isOpen, onClose, onOpen, onCopy, currentEcoupon } = useEcoupon();
  return (
    <EcouponContainer>
      <EcouponStyled>
        <EcouponTitle>
          <h4>Gunakan kode promonya</h4>
          <p>Salin dan masukan di halaman checkout</p>
        </EcouponTitle>
        <EcouponList>
          <Carousel {...generateSliderSetting(data ?? [])}>
            {data?.map((eCoupon) => (
              <Coupon
                key={eCoupon?.code}
                title={eCoupon?.name}
                code={eCoupon?.code}
                onCopy={onCopy(eCoupon)}
                onModal={onOpen(eCoupon)}
              />
            ))}
          </Carousel>
        </EcouponList>
      </EcouponStyled>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        title="Syarat & Ketentuan"
        size="lg"
        isDrawer
        variant="default"
        maxBody="calc(100vh - 57px - 73px - 128px)"
        footer={
          <Button onClick={onCopy(currentEcoupon!)} color="primary" isFullWidth size="lg">
            Salin Kode eCoupon
          </Button>
        }
      >
        <EcouponModal>
          <h3>{currentEcoupon?.name}</h3>
          <EcouponPeriode>
            {/* <div>
              <label>Periode Promo</label>
              <p>{currentEcoupon?.duration}</p>
            </div> */}
            {/* <div>
              <label>Minimum Transaksi</label>
              <p>{currentEcoupon?.minimumTransaction}</p>
            </div> */}
          </EcouponPeriode>
          {/* <div dangerouslySetInnerHTML={{ __html: currentEcoupon?.tnc ?? '' }} /> */}
        </EcouponModal>
      </Modal>
    </EcouponContainer>
  );
};

export default Index;
