import '../scss/footer.scss';
import logo from '../assets/logo-icon.svg';
import instagram from '../assets/instagram-icon.svg';
import facebook from '../assets/facebook-icon.svg';
import twitter from '../assets/twitter-icon.svg';
import youtube from '../assets/youtube-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-side">
        <div className="footer-top">
          <img className="footer-logo" src={logo} alt="range rover logo" />
          <ul className="footer-nav">
            <li><a href="">RANGE ROVER</a></li>
            <li><a href="">DEFENDER</a></li>
            <li><a href="">DISCOVERY</a></li>
            <li><a href="">OWNERSHIP</a></li>
            <li><a href="">CONTACT US</a></li>
            <li><a href="">CAREER</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; JAGUAR LAND ROVER LIMITED 2023</p>
          <a href="">PRIVACY POLICY</a>
          <a href="">COOKIE POLICY</a>
        </div>
      </div>

      <ul className="footer-nav-social">
        <li><a href=""><img className="footer-logo" src={instagram} alt="instagram logo" /></a></li>
        <li><a href=""><img className="footer-logo" src={facebook} alt="facebook logo" /></a></li>
        <li><a href=""><img className="footer-logo" src={youtube} alt="youtube logo" /></a></li>
        <li><a href=""><img className="footer-logo" src={twitter} alt="twitter logo" /></a></li>
      </ul>
    </footer>
  );
}

export default Footer;
