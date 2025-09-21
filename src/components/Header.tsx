import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">Tasks App</Link>
      <nav>
        <Link to="/create">
          <button>Nueva tarea</button>
        </Link>
      </nav>
    </header>
  );
}
