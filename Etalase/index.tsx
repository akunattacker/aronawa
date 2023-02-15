import { EtalaseStyled } from '@/components/Etalase/Etalase.styles';
import type { IEtalase } from '@/components/Etalase/Etalase.types';
import Catalog from '@/components/Etalase/Partials/Catalog';
import Shortcut from '@/components/Etalase/Partials/Shortcut';

const Index = ({ etalase }: IEtalase) => {
  return (
    <EtalaseStyled id="etalase-bottom">
      <Shortcut etalase={etalase} />
      <Catalog etalase={etalase} />
    </EtalaseStyled>
  );
};

export default Index;
