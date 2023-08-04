import { sections } from 'texts/common';

const Sitemap = () => {
  return (
    <div className="footer-sitemap">
      {sections.map((section) => {
        return (
          <div key={section.id} className="footer-sitemap-nav">
            <a className="nav-item" href={`#${section.id}`}>
              {section.name}
            </a>

            {section.sub && (
              <div className="footer-sitemap-nav-sub">
                {section.sub.map((sub) => {
                  return (
                    <a key={sub.id} className="nav-item" href={`#${sub.id}`}>
                      {sub.name}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sitemap;
