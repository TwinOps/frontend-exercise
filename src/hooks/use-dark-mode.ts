import React from 'react';

type DarkModeState = 'dark' | 'light';

const useDarkMode = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';

  const [mode, setMode] = React.useState<DarkModeState>(() => {
    const localStorageValue = window.localStorage.getItem('colorMode');
    if (localStorageValue) {
      return localStorageValue === 'dark' ? 'dark' : 'light';
    } else {
      return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light';
    }
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = (event: MediaQueryListEvent) => {
      setMode(mediaQuery.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(mode);
  }, [mode]);

  return [mode, setMode] as const;
};

export default useDarkMode;
