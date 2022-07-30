import React, { useState } from "react";
import {
  HeaderSection, 
  HeaderWrapper,
  HeaderLogo, 
  HeaderBtnBlock, 
  HeaderBtn 
} from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const logInToggle = () => setIsLogIn(!isLogIn);

  return (
    <HeaderSection isLogIn={isLogIn}>
      <HeaderWrapper>
        <HeaderLogo>
          <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/`}>MOVIE</Link>
        </HeaderLogo>
        <HeaderBtnBlock className={isLogIn ? "isHide" : "isShow"}>
          <Link style={{ textDecoration: 'none', color: 'black'}} to={`/login`}>
            <HeaderBtn>로그인</HeaderBtn>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`/signup`}>
            <HeaderBtn>회원가입</HeaderBtn>
          </Link>
        </HeaderBtnBlock>
        <HeaderBtnBlock className={isLogIn ? "isShow" : "isHide"}>
          <HeaderBtn onClick={logInToggle}>로그아웃</HeaderBtn>
        </HeaderBtnBlock>
      </HeaderWrapper>
    </HeaderSection>
  );
};

export default Header;
