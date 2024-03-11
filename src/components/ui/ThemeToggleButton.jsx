import { useState } from 'react';
import { setTheme, toggleTheme } from '../../utilities/themeToggle';

let defaultTheme = setTheme();

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <button
      className={`header__theme-toggle-btn ${theme}`}
      onClick={toggleTheme(theme, setTheme)}
    >
      <span className="header__theme-icon"></span>
      {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
