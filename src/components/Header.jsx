import { useState } from 'react';
import { setTheme, toggleTheme } from '../utilities/themeToggle';

let defaultTheme = setTheme();

export default function Header() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a className="header__home-link" href="#">
            where in the world?
          </a>
          <button
            className={`header__theme-toggle-btn ${theme}`}
            onClick={toggleTheme(theme, setTheme)}
          >
            <span className="header__theme-icon"></span>
            {theme === 'light' ? 'dark' : 'light'} mode
          </button>
        </nav>
      </div>
    </header>
  );
}
