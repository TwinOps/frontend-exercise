import React from 'react';
import { NavLink } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <nav className="w-64 flex-shrink-0">
      <div className="flex-auto bg-gray-200 dark:bg-gray-700 h-full">
        <div className="flex flex-col overflow-y-auto">
          <ul className="relative m-0 p-0 list-none h-full">
            <li className="text-gray-900 dark:text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-700">
              TwinOps
            </li>
            <li className="text-gray-900 dark:text-white p-4 w-full flex relative shadow-sm justify-start bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-700">
              <div className="mr-4 flex-shrink-0 my-auto">
                <svg
                  className="fill-current w-5 h-5"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                </svg>
              </div>
              <NavLink to={`/`}>
                <div className="flex-auto my-1">
                  <span>Frontend Interview</span>
                </div>
              </NavLink>
            </li>
            <li className="p-4 w-full flex relative shadow-sm">
              <div className="flex-auto my-1">
                <span className="text-gray-900 dark:text-white font-medium">
                  Exercises
                </span>
              </div>
            </li>

            <NavLink
              to={`/exercise-1`}
              activeClassName="text-blue-500 dark:text-blue-400"
              className="text-gray-900 dark:text-gray-400 "
            >
              <div className="flex relative px-4 hover:bg-gray-700 cursor-pointer">
                <div className="mr-4 my-auto">
                  <svg
                    className="fill-current h-5 w-5"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                  </svg>
                </div>
                <div className="flex-auto my-1">
                  <span>Items don't match</span>
                </div>
              </div>
            </NavLink>
            <NavLink
              to={`/exercise-2`}
              activeClassName="text-blue-500 dark:text-blue-400"
              className="text-gray-900 dark:text-gray-400 "
            >
              <div className="flex relative px-4 hover:bg-gray-700 cursor-pointer">
                <div className="mr-4 my-auto">
                  <svg
                    className="fill-current h-5 w-5"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                  </svg>
                </div>
                <div className="flex-auto my-1">
                  <span>Theme Toggler</span>
                </div>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Main;
