import { useState } from 'react';
import style from './textInput.module.scss';

interface TextInputProps {
  children: React.ReactNode;
  inputValue?: string;
  onChange?: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  alwaysShowPlaceholder?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  isPassword?: boolean;
  placeholder?: string;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  children,
  placeholder,
  className,
  inputValue,
  ref,
  onChange,
  alwaysShowPlaceholder = true,
  isPassword = false,
}) => {
  const [isFocus, setIsFocus] = useState(alwaysShowPlaceholder);

  const onFocus = () => {
    setIsFocus(true);
  }

  const onBlur = () => {
    setIsFocus(alwaysShowPlaceholder);
  }

  return (
    <label className={`${style.label} ${className}`}>
      <input
      ref={ref}
      value={inputValue}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={isFocus ? placeholder : ""}
      className={style.input}
      type={isPassword ? "password" : "text"}
      />
      <span className={`${style.text}`}>{children}</span>
    </label>
  );
}
 