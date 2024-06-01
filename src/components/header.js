import '../scss/header.scss';
import logo from '../assets/logo-icon.svg';
import union from '../assets/union-icon.svg';
import search from '../assets/search-icon.svg';

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="range rover logo" />
      <div className="menu">
        <a className="menu-title" href="#">Menu</a>
        <ul className="menu-nav">
          <li><a className="menu-nav-link" href="#">vehicles</a></li>
          <li><a className="menu-nav-link" href="#">Ownership</a></li>
          <li><a className="menu-nav-link" href="#">Finance</a></li>
          <li><a className="menu-nav-link" href="#">Explore</a></li>
        </ul>
      </div>
      <div className="dealer-info">
        <img src={search} alt="search logo" />
        <img src={union} alt="union icon" />
      </div>
    </header>
  );
}

let menuTitle = document.querySelectorAll(".menu-title");
let menuContainer = document.querySelectorAll(".menu-nav");
menuTitle[0].addEventListener("click", function() {  
  menuContainer[0].classList.add("opened");
});

export default Header;
