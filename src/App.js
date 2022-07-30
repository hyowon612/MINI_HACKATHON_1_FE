import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/template';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </BrowserRouter>
      </Template>
    </>
  )
}

export default App;
