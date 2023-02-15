import { bannerListData } from '@/components/ContentColumn/ContentColumn.model';
import type { IContentColumn } from '@/components/ContentColumn/ContentColumn.types';
import ProductList from '@/components/ProductList';
import Section from '@/components/Section';

const Index = ({ title, data, variant, isNoGutter }: IContentColumn) => {
  return (
    <Section title={title} isNoGutter={isNoGutter}>
      <ProductList
        isImageOnly
        data={bannerListData(data)}
        variant={variant}
        isNoGutter={isNoGutter}
      />
    </Section>
  );
};

export default Index;
