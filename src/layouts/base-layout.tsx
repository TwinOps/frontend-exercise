import React from 'react';

import Aside from '../components/aside';
import Header from '../components/header';

interface LayoutProps {
  hideAside?: boolean;
}

const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen">
      <Aside />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-col w-full p-2">{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
