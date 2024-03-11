import ThemeToggleButton from './ui/ThemeToggleButton';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a className="header__home-link" href="#">
            where in the world?
          </a>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}
