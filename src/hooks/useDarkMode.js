import { useState, useEffect } from 'react';

/**
 * A custom React hook to manage and persist a dark/light theme.
 * @param {boolean} defaultDark - Whether the default theme should be dark.
 * @returns {{dark: boolean, setDark: Function}} - The current theme state and a function to update it.
 */
export default function useDarkMode(defaultDark = true) {
  const [dark, setDark] = useState(() => {
    // Check for saved preference in localStorage first.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Otherwise, use the default.
    return defaultDark;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return { dark, setDark };
}
