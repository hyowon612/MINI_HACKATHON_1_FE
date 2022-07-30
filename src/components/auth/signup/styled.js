import styled from "styled-components";

export const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

export const SignUpComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 400px;
  margin-top: 50px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #606060;
  margin-bottom: 50px;
`;

export const IdInput = styled.input`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  border: 1px solid #F2F2F2;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 20px;
  font-size: 18px;
  color: #0D0D0D;
  :focus {
    outline: none;
  }
  :: placeholder {
    color: #808080;
  }
`;

export const PasswordInput = styled.input`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 0;
  background-color: white;
  border: 1px solid #F2F2F2;
  border-radius: 10px;
  margin-bottom: 50px;
  padding: 0 20px;
  font-size: 18px;
  color: #0D0D0D;
  :focus {
    outline: none;
  }
  :: placeholder {
    color: #808080;
  }
`;

export const SignUpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 120px;
  height: 60px;
  margin-left: 380px;
  border: none;
  border-radius: 30px;
  background-color: #3253BF;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
