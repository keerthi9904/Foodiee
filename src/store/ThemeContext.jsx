import { createContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  fontSize: 'normal',
  increaseFont: () => {},
  decreaseFont: () => {}
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('normal');

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  function increaseFont() {
    setFontSize(prev => prev === 'normal' ? 'large' : 'xlarge');
  }

  function decreaseFont() {
    setFontSize(prev => prev === 'xlarge' ? 'large' : 'normal');
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      fontSize,
      increaseFont,
      decreaseFont
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;