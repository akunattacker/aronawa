import { BreadcrumbWrapper, Title } from '@/components/DisplayHeading/DisplayHeading.styles';
import Section from '@/components/Section';
import Breadcrumb, { BreadcrumbItem } from 'ui/components/molecules/Breadcrumb';

export interface IProps {
  title?: string;
  isShowBreadcrumb?: boolean;
}

const Index = ({ title, isShowBreadcrumb }: IProps) => {
  return (
    <Section hasPadding>
      {title && <Title>{title}</Title>}
      {isShowBreadcrumb && (
        <BreadcrumbWrapper>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>{title}</BreadcrumbItem>
          </Breadcrumb>
        </BreadcrumbWrapper>
      )}
    </Section>
  );
};

export default Index;
