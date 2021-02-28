import React from 'react';

import BaseLayout from '../layouts/base-layout';

const Home: React.FC = () => {
  return (
    <BaseLayout>
      <div className="h-full p-2">
        <h1 className="text-center text-3xl underline">
          TwinOps Interview Frontend Exercices
        </h1>
        <p className="mt-2 text-xl">
          During this pair programming session, let's try to complete a maximum
          of exercises
        </p>
      </div>
    </BaseLayout>
  );
};

export default Home;
