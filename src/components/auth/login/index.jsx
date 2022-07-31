import React, { useState } from "react";
import { 
  LoginSection, 
  LoginComponent,
  Title, 
  IdInput,
  PasswordInput, 
  LoginButton
} from "./styled";
import AuthService from "../../../apis/auth-service";
import { useNavigate } from 'react-router-dom';

const authService = new AuthService();

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const { result } = await authService.login(username, password);
      console.log(result);
      if(result === 200) {
        localStorage.setItem('username', username);
        navigate(`/`);
        window.location.reload();
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
    <LoginSection>
      <LoginComponent>
        <Title>로그인</Title>
        <IdInput
          onChange={handleUsername}
          type="text" 
          placeholder="아이디"
        />
        <PasswordInput
          onChange={handlePassword}
          type="password" 
          placeholder="비밀번호"
        />
        <LoginButton onClick={handleSubmit}>로그인</LoginButton>
      </LoginComponent>
    </LoginSection>   
  )
}

export default Login;