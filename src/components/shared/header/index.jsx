import React, { useState } from "react";
import { HeaderSection, HeaderLogo, HeaderBtnBlock, HeaderBtn } from "./styled";

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const logInToggle = () => setIsLogIn(!isLogIn);
  return (
    <HeaderSection isLogIn={isLogIn}>
      <HeaderLogo>MOVIE</HeaderLogo>
      <HeaderBtnBlock className={isLogIn ? "isHide" : "isShow"}>
        <HeaderBtn onClick={logInToggle}>로그인</HeaderBtn>
        <HeaderBtn>회원가입</HeaderBtn>
      </HeaderBtnBlock>
      <HeaderBtnBlock className={isLogIn ? "isShow" : "isHide"}>
        <HeaderBtn onClick={logInToggle}>로그아웃</HeaderBtn>
      </HeaderBtnBlock>
    </HeaderSection>
  );
};

export default Header;
