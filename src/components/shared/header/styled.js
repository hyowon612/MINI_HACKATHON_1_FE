import styled from "styled-components";

export const HeaderSection = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .isHide {
    display: none;
  }
  .isShow {
    display: block;
  }
`;

export const HeaderLogo = styled.h2``;
export const HeaderBtnBlock = styled.div``;
export const HeaderBtn = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
