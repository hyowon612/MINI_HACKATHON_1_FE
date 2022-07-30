import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/template';
import Header from './components/shared/header';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';
import Movie from './components/movie';

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFFFFF;
    height: 100vh;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/movie" element={<Movie/>}/>
        </Routes>
        </BrowserRouter>
      </Template>
    </>
  )
}

export default App;
