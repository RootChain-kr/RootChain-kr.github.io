import './index.css';
import Contact from './Contact';
import Sitemap from './Sitemap';
import Copyright from './Copyright';

const AppFooter = () => {
  return (
    <div className="App-footer" id="contactus">
      <div className="container">
        <div className="footer-wrapper">
          <Contact />
          <Sitemap />
        </div>
      </div>

      <div className="container">
        <Copyright />
      </div>
    </div>
  );
};

export default AppFooter;
