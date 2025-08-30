import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // Initialize state from localStorage or default to true (dark mode)
  const [dark, setDark] = useState(() => {
    try {
      const item = window.localStorage.getItem('darkMode');
      return item ? JSON.parse(item) : true;
    } catch (error) {
      console.log(error);
      return true;
    }
  });

  // Effect to update localStorage and the class on the root element
  useEffect(() => {
    try {
      window.localStorage.setItem('darkMode', JSON.stringify(dark));
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (error) {
      console.log(error);
    }
  }, [dark]);

  return { dark, setDark };
};

export default useDarkMode;

