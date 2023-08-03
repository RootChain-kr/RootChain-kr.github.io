import { navItems } from 'assets/data';
import BarsIcon from 'assets/icon/bars-solid.svg';

const FoldedMenu = () => {
  return (
    <div className="nav-icon">
      <img src={BarsIcon} />
    </div>
  );
};

const Nav = () => {
  return (
    <>
      {/* <FoldedMenu /> */}
      <div className="nav">
        {navItems.map((item) => {
          return !item.sub ? (
            <a key={item.id} className="nav-item" href={`#${item.id}`}>
              <div>{item.name}</div>
            </a>
          ) : (
            <div key={item.id} className="dropdown">
              <a className="nav-item">
                <div>{item.name}</div>
              </a>

              <div className="dropdown-content">
                {item.sub.map((sub) => {
                  return (
                    <a key={sub.id} href={`#${sub.id}`}>
                      <div>{sub.name}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Nav;
