import React, { useState, useEffect } from "react";
import {
  HeaderSection, 
  HeaderWrapper,
  HeaderLogo, 
  HeaderBtnBlock, 
  HeaderBtn,
  Username
} from "./styled";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const [isLogIn, setIsLogIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLogIn(false);
    navigate(`/`);
  };

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setIsLogIn(true);
    }
  }, []);

  return (
    <HeaderSection>
      <HeaderWrapper>
        <HeaderLogo>
          <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/`}>MOVIE</Link>
        </HeaderLogo>
        {isLogIn ? (
          <HeaderBtnBlock>
            <Username>{localStorage.getItem('username')}</Username>
            <HeaderBtn onClick={handleLogout}>로그아웃</HeaderBtn>
          </HeaderBtnBlock>
        ) : (
          <HeaderBtnBlock>
            <Link style={{ textDecoration: 'none', color: 'black'}} to={`/login`}>
              <HeaderBtn>로그인</HeaderBtn>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/signup`}>
              <HeaderBtn>회원가입</HeaderBtn>
            </Link>
          </HeaderBtnBlock>
        )}
      </HeaderWrapper>
    </HeaderSection>
  );
};

export default Header;
