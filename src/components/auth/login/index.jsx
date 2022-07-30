import React from "react";
import { 
  LoginSection, 
  LoginComponent,
  Title, 
  IdInput,
  PasswordInput, 
  LoginButton
} from "./styled";

const Login = () => {
  return (
    <LoginSection>
      <LoginComponent>
        <Title>로그인</Title>
        <IdInput
          type="text" 
          placeholder="아이디"
        />
        <PasswordInput
          type="text" 
          placeholder="비밀번호"
        />
        <LoginButton>로그인</LoginButton>
      </LoginComponent>
    </LoginSection>   
  )
}

export default Login;