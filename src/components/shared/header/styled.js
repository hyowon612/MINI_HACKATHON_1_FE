import styled from "styled-components";

export const HeaderSection = styled.div`
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 5px 10px #0000000D;
`;

export const HeaderWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const HeaderLogo = styled.h2`
  cursor: pointer;
`;

export const HeaderBtnBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderBtn = styled.button`
  width: 95px;
  height: 40px;
  font-size: 14px;
  color: #606060;
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Username = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #404040;
`;
