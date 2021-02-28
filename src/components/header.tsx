import React from 'react';

import ThemeToggler from './theme-toggler';

const Header: React.FC = ({ children }) => {
  return (
    <header className="text-white bg-blue-400 sticky left-auto top-0 right-0">
      <div className="h-12 px-6 flex relative items-center justify-end">
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
