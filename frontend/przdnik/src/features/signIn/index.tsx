import { useState } from "react";
import { Button, TextForm, TextInput } from "shared/ui";
import style from './signIn.module.scss';

export const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(true);
  }

  const onSubmit = () => {
    setIsVisible(false);
  }

  const onBlur = () => {
    setIsVisible(false);
  }

  return (
    <>
    <Button onClick={onClick}>
      Sign In
    </Button>

    <TextForm isOpen={isVisible} onSubmit={onSubmit} onClose={onBlur}>
      <h3>Log into account</h3>
      <TextInput alwaysShowPlaceholder={false} placeholder="nickname or email">Username or Email</TextInput>
      <TextInput alwaysShowPlaceholder={false} isPassword placeholder="3Lfhjakvn14$lfk">Password</TextInput>
      <Button onClick={onSubmit} classname={style.button}>I am back!</Button>
    </TextForm>
    </>
  )
}
 