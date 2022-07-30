import React from "react";
import {
  SignUpSection, 
  SignUpComponent,
  Title, 
  IdInput,
  PasswordInput, 
  SignUpButton
} from "./styled";

const SignUp = () => {
  return (
    <SignUpSection>
      <SignUpComponent>
        <Title>회원가입</Title>
        <IdInput
          type="text" 
          placeholder="아이디"
        />
        <PasswordInput
          type="text" 
          placeholder="비밀번호"
        />
        <SignUpButton>회원가입</SignUpButton>
      </SignUpComponent>
    </SignUpSection>   
  )
}

export default SignUp;