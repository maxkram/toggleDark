import React from 'react';
import useLocalStorage from 'use-local-storage'
import './App.css';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
