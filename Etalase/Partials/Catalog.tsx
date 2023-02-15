import { CatalogProduct, CatalogStyled, ProductWrapper } from '@/components/Etalase/Etalase.styles';
import type { IEtalase } from '@/components/Etalase/Etalase.types';
import Product from '@/components/Product';
import Section from '@/components/Section';
import { slugify } from 'apps-lib';
import { Element } from 'react-scroll';

const Catalog = ({ etalase }: IEtalase) => {
  return (
    <CatalogStyled>
      {etalase?.map(
        (data, index) =>
          data.isActive && (
            <Element name={slugify(data.title)} key={index}>
              <Section title={data.title} link={data.linkSeeAll}>
                <CatalogProduct>
                  {data.product?.map((item, index) => (
                    <ProductWrapper key={index}>
                      <Product
                        key={index}
                        imageUrl={item.imageUrl}
                        title={item.name}
                        price={item.specialPrice}
                        discount={item.discountPercentage}
                        normalPrice={item.normalPrice}
                        link={`/${item.slug}`}
                        ratingScore={item?.stat?.averageRatings}
                        ratingCount={item?.stat?.totalReviews}
                        ratingPercentage={item?.stat?.percentageRatings}
                        merchantLocation={item?.merchant?.storeDistrict?.name}
                        merchantName={item?.merchant?.name}
                        bbiImage={item?.made?.image?.large}
                        isBig
                        isFullWidth
                      />
                    </ProductWrapper>
                  ))}
                </CatalogProduct>
              </Section>
            </Element>
          ),
      )}
    </CatalogStyled>
  );
};

export default Catalog;
