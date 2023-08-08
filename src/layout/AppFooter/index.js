import './index.css';
import Contact from './Contact';
import Sitemap from './Sitemap';
import Copyright from './Copyright';

const AppFooter = () => {
  return (
    <footer className="App-footer" id="contactus">
      <div className="container">
        <div className="footer-wrapper">
          <Contact />
          <Sitemap />
        </div>
      </div>

      <div className="container">
        <Copyright />
      </div>
    </footer>
  );
};

export default AppFooter;
