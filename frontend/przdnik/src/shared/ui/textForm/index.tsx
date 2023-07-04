import { OverlayingPopup } from "../overlayingPopup";

import style from './textForm.module.scss'

interface TextFormProps {
  children: React.ReactNode;
  isOpen: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

export const TextForm: React.FC<TextFormProps> = ({
  children,
  isOpen,
  onSubmit,
  onClose,
}) => {
  

  return (
    <OverlayingPopup isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit} className={style.formContainer}>
        {children}
        <input className={style.submit} type="submit" />
      </form>
    </OverlayingPopup>
  );
}
 