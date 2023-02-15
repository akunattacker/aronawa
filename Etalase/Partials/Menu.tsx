import { ShortcutWrapper } from '@/components/Etalase/Etalase.styles';
import type { IEtalase } from '@/components/Etalase/Etalase.types';
import { slugify } from 'apps-lib';
import { Link } from 'react-scroll';
import RenderIf from 'ui/helpers/RenderIf';

const Menu = ({ hasTitle, isMobile, etalase, onSetActive }: IEtalase) => {
  const offset = isMobile ? -120 : -48;
  return (
    <ShortcutWrapper>
      <RenderIf isTrue={!!hasTitle}>
        <h3>Etalase</h3>
      </RenderIf>
      <ul>
        {etalase?.map(
          (data, index) =>
            data.isActive && (
              <li key={index}>
                <Link
                  activeClass="active"
                  to={slugify(data.title)}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offset}
                  onSetActive={onSetActive}
                >
                  {data.title}
                </Link>
              </li>
            ),
        )}
      </ul>
    </ShortcutWrapper>
  );
};

export default Menu;
