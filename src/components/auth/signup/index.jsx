import React, { useState } from "react";
import {
  SignUpSection, 
  SignUpComponent,
  Title, 
  IdInput,
  PasswordInput, 
  SignUpButton
} from "./styled";
import AuthService from "../../../apis/auth-service";
import { useNavigate } from 'react-router-dom';

const authService = new AuthService();

const SignUp = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const result = await authService.signup(username, password);
      console.log(result);
      console.log("회원가입버튼");
      if(true) {
        navigate(`/`);
      };
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <SignUpSection>
      <SignUpComponent>
        <Title>회원가입</Title>
        <IdInput
          onChange={handleUsername}
          type="text" 
          placeholder="아이디"
        />
        <PasswordInput
          onChange={handlePassword}
          type="text" 
          placeholder="비밀번호"
        />
        <SignUpButton onClick={handleSubmit}>회원가입</SignUpButton>
      </SignUpComponent>
    </SignUpSection>   
  )
}

export default SignUp;