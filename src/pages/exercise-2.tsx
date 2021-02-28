import React from 'react';

import Button from '../components/button';
import BaseLayout from '../layouts/base-layout';

const Exercise2: React.FC = () => {
  return (
    <BaseLayout>
      <h1 className="text-center text-3xl underline">Theme Toggler</h1>
      <div className="flex flex-col">
        <h2 className="text-xl text-bold">Step 1</h2>
        <p className="mt-2 text-xl">
          If no value has been saved by user, get the one from the system
        </p>

        <h2 className="text-xl text-bold">Step 2</h2>
        <p className="mt-2 text-xl">
          Transform button for it to have a look of a switch.
        </p>
      </div>
    </BaseLayout>
  );
};

export default Exercise2;
