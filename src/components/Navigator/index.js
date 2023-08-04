import './index.css';
import { sections } from 'texts/common';
import { barsIcon } from 'common/icons';

const CompactNav = () => {
  return (
    <div className="nav-compact">
      <div className="dropdown">
        <a className="nav-item icon">
          <img src={barsIcon} />
        </a>

        <div className="dropdown-content">
          {sections.map((section) => {
            return !section.sub ? (
              <a key={section.id} href={`#${section.id}`}>
                {section.name}
              </a>
            ) : (
              <div key={section.id}>
                <a className="disabled">{section.name}</a>
                {section.sub.map((sub) => {
                  return (
                    <a className="sub" key={sub.id} href={`#${sub.id}`}>
                      {sub.name}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="nav">
      {sections.map((section) => {
        return !section.sub ? (
          <a key={section.id} className="nav-item" href={`#${section.id}`}>
            {section.name}
          </a>
        ) : (
          <div key={section.id} className="dropdown">
            <a className="nav-item">{section.name}</a>

            <div className="dropdown-content">
              {section.sub.map((sub) => {
                return (
                  <a key={sub.id} href={`#${sub.id}`}>
                    {sub.name}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Navigator = () => {
  return (
    <>
      <CompactNav />
      <Nav />
    </>
  );
};

export default Navigator;
