import {Link} from 'react-router-dom';
import '../Styles/NavBarstyles.css';

function NavBar() {
  return (
    <div className="navbar">
      <img
        src="src\assets\COTOVIA-LOGO.png"
        alt="cotovia Logo"
        className="navbar-logo"
      />
      <nav className="navbar-links">
        <Link to="/products" className="navbar-link">Produtos</Link>
        <Link to="/about" className="navbar-link">Quem Somos</Link>
        <Link to="/contact" className="navbar-link">Contactos</Link>
      </nav>
    </div>
  );
}

export default NavBar;