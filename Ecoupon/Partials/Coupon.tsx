import { Action, Code, CouponStyled, Info } from '@/components/Ecoupon/Ecoupon.styles';
import Icon from 'ui/components/atoms/Icon';

interface IProps {
  code?: string;
  title?: string;
  onCopy?: () => void;
  onModal?: () => void;
}

const Coupon = ({ title, code, onCopy, onModal }: IProps) => {
  return (
    <CouponStyled>
      <Info>
        <p>{title}</p>
        <Code onClick={onCopy}>
          <span>{code}</span>
          <Icon name="copy" />
        </Code>
      </Info>
      <Action onClick={onModal}>
        <Icon name="angle-right" size={20} />
      </Action>
    </CouponStyled>
  );
};

export default Coupon;
