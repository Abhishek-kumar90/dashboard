import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Switch from '@mui/material/Switch';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Switch checked={theme === 'dark'} onChange={toggleTheme} />
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </div>
  );
};

export default ThemeSwitcher;
