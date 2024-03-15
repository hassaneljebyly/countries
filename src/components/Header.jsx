import { Link } from 'react-router-dom';
import ThemeToggleButton from './ui/ThemeToggleButton';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link className="header__home-link" to="/countries">
            where in the world?
          </Link>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}
