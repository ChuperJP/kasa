import logo from '../../assets/LOGO.png';
import { NavLink } from 'react-router-dom';
import '../../styles/Header.css';
function Header() {
  return (
    <header>
      <img src={logo} alt="logo kasa" className="header-logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/kasa/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/About">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
