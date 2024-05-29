import '../scss/header.scss';
import logo from '../assets/logo-icon.svg';
import union from '../assets/union-icon.svg';
import search from '../assets/search-icon.svg';

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="range rover logo" />
      <div className="main-menu">
        <a className="menu-title link" href="#">Menu</a>
        <ul className="menu">
          <li><a className="link" href="#">vehicles</a></li>
          <li><a className="link" href="#">Ownership</a></li>
          <li><a className="link" href="#">Finance</a></li>
          <li><a className="link" href="#">Explore</a></li>
        </ul>
      </div>
      <div className="dealer-info">
        <img src={search} alt="search logo" />
        <img src={union} alt="union icon" />
      </div>
    </header>
  );
}

export default Header;
