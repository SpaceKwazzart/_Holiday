import { useState } from "react";
import { TextInput } from "shared/ui";

interface QuickSearchProps {
  children: React.ReactNode;
  className?: string;
  placeHolder?: string;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({
  children,
  className,
  placeHolder
}) => {

  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue, event.target.value);
  } 

  return (
    <TextInput
    inputValue={inputValue}
    onChange={onChange}
    alwaysShowPlaceholder={false}
    placeholder={placeHolder}
    className={`${className}`}
    >
      {children}
    </TextInput>
  );
}
 