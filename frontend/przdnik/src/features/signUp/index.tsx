import { useState } from "react";
import { Button } from "shared/ui";

import { TextInput } from 'shared/ui/textInput/index';
import { TextForm } from 'shared/ui/textForm/index';
import style from './signUp.module.scss'

export const SignUp = () => {
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
      Sign Up
    </Button>
    <TextForm isOpen={isVisible} onSubmit={onSubmit} onClose={onBlur}>
      <h3>Registration</h3>
      <TextInput alwaysShowPlaceholder={false} placeholder="kwazzart">Username</TextInput>
      <TextInput alwaysShowPlaceholder={false} placeholder="vladimir@gmail.com">Email</TextInput>
      <TextInput alwaysShowPlaceholder={false} isPassword placeholder="3Lfhjakvn14$lfk">Password</TextInput>
      <Button onClick={onSubmit} classname={style.button}>Create account :3</Button>
    </TextForm>

    </>
  );
}
 