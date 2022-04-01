import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../theme/GlobalStyle';
import { Footer } from './Footer';
import { Nav } from '../modules';

import '../../style/all.sass';
import { darkTheme, lightTheme } from '../../theme';

const ModeButton = styled.button`
  background: none;
  border: 0;
  padding: 1rem;
  right: 5px;
  top: 4px;
  position: fixed;
  z-index: 999;
  cursor: pointer;
  :focus {
    border: 0;
    outline: none;
  }
`;

const Layout = ({ children }: { children?: any }) => {
  const stored = typeof window !== 'undefined' && localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(stored === 'false' ? false : true);
  const toggelThemeMode = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDarkMode', `${!isDarkMode}`);
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <React.Fragment>
        <GlobalStyle />
        <main className={isDarkMode ? 'night' : 'day'}>
          <Nav />
          <ModeButton aria-label="Theme Mode" onClick={toggelThemeMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isDarkMode ? '#fff' : '#000'}
              stroke={isDarkMode ? '#fff' : '#000'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </ModeButton>
          {children}
          <Footer />
        </main>
      </React.Fragment>
    </ThemeProvider>
  );
};

export { Layout };
