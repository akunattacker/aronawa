import { bannerListData, productListData } from '@/components/ContentProduct/ContentProduct.model';
import type { IContentProduct } from '@/components/ContentProduct/ContentProduct.types';
import ProductList from '@/components/ProductList';
import Section from '@/components/Section';

const Index = ({
  title,
  data,
  slidesToShow,
  linkSeeAll,
  isVariableWidth,
  banner,
  isImageOnly,
  hasBuyButton,
  variant,
}: IContentProduct) => {
  return (
    <Section title={title} link={linkSeeAll}>
      <ProductList
        data={productListData(data)}
        banner={bannerListData(banner)}
        slidesToShow={slidesToShow}
        isVariableWidth={isVariableWidth}
        isImageOnly={isImageOnly}
        hasBuyButton={hasBuyButton}
        variant={variant}
      />
    </Section>
  );
};

export default Index;
