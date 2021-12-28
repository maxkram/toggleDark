import React from 'react';
import useLocalStorage from 'use-local-storage'
import './App.css';
import Square from './components/square/Square'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="App" data-theme={theme}>
      <span>React Darkmode</span>
      <button onClick={switchTheme}>
        Toggle to {theme=== 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <Square/>
    </div>
  );
}

export default App;
