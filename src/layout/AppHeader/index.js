import './index.css';
import { product } from 'assets/data';

import Nav from './Nav';
import HeaderMenus from './HeaderMenus';

const AppHeader = () => {
  return (
    <div className="App-header border-bottom">
      <div className="container">
        <div className="nav-bar">
          <div className="logo">
            <img src={product.symbol} />
          </div>
          <Nav />
          <HeaderMenus />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
