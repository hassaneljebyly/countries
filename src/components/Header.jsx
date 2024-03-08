import { useState } from 'react';

let defaultTheme = localStorage.getItem('theme') || 'light';
console.log(defaultTheme);
document.body.setAttribute('data-theme', defaultTheme);

export default function Header() {
  const [theme, setTheme] = useState('light');

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a className="header__home-link" href="#">
            where in the world?
          </a>
          <button
            className={`header__theme-toggle-btn ${theme}`}
            onClick={() => {
              const newTheme = theme === 'light' ? 'dark' : 'light';
              document.body.setAttribute('data-theme', newTheme);
              localStorage.setItem('theme', newTheme);
              setTheme(newTheme);
            }}
          >
            <span className="header__theme-icon"></span>
            {theme === 'light' ? 'dark' : 'light'} mode
          </button>
        </nav>
      </div>
    </header>
  );
}
