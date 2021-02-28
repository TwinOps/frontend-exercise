import React from 'react';
import useDarkMode from '../hooks/use-dark-mode';

const ThemeToggler: React.FC = () => {
  const [mode, setMode] = useDarkMode();

  const handleCheck = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex">
      <label htmlFor="toogleA" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toogleA"
            type="checkbox"
            className="hidden"
            onChange={() => {
              handleCheck();
            }}
            defaultChecked={mode === 'dark'}
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 transition duration-150 ease-in-out -top-1 -left-1"></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggler;
