import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';


const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition duration-300"
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};


const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition duration-300">
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-semibold text-blue-500 mb-4">Welcome</h1>
          <ThemeToggleButton />

        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;