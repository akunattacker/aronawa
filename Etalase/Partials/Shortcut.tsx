import { ShortcutButton, ShortcutStyled } from '@/components/Etalase/Etalase.styles';
import type { IEtalase } from '@/components/Etalase/Etalase.types';
import Menu from '@/components/Etalase/Partials/Menu';
import { useWindowSize } from '@/utils/useWindowSize';
import { useState } from 'react';
import Sticky from 'react-stickynode';
import Button from 'ui/components/atoms/Button';
import Drawer from 'ui/components/molecules/Drawer';

const Shortcut = ({ etalase }: IEtalase) => {
  const size = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <ShortcutStyled>
      {size.width > 992 ? (
        <Sticky enabled innerZ={98} top={88} bottomBoundary="#etalase-bottom">
          <Menu etalase={etalase} hasTitle />
        </Sticky>
      ) : (
        <Sticky enabled innerZ={98} top={56} bottomBoundary="#etalase-bottom">
          <ShortcutButton>
            <Button icon="bars" onClick={onOpen}>
              Etalase
            </Button>
          </ShortcutButton>
        </Sticky>
      )}
      <Drawer
        title="Etalase"
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
        isNoFooter
        isFullHeight
      >
        <Menu etalase={etalase} isMobile onSetActive={onClose} />
      </Drawer>
    </ShortcutStyled>
  );
};

export default Shortcut;
