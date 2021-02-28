import React from 'react';
import useDarkMode from '../hooks/use-dark-mode';

const ThemeToggler: React.FC = () => {
  const [mode, setMode] = useDarkMode();

  const handleClick = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex">
      <button
        id="themeToggler"
        name="themeSwitch"
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default ThemeToggler;
