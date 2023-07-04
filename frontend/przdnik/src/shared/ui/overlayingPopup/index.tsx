import { Portal } from "../portal";
import style from './overlayingPopup.module.scss';

interface OverlayingPopupProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const OverlayingPopup: React.FC<OverlayingPopupProps> = ({
  children,
  onClose,
  isOpen
}) => {

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={style.container}>
        <div
        className={style.overlay}
        role="button"
        tabIndex={0}
        onClick={onClose}
        />
        {children}
      </div>
    </Portal>
  );
}
 