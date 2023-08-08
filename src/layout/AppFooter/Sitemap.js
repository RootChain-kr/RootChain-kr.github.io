import { sections } from 'texts/common';

const Sitemap = () => {
  return (
    <div className="footer-sitemap">
      {sections.map((section) => {
        return (
          <div key={section.id}>
            <a href={`#${section.id}`}>
              <button>{section.name}</button>
            </a>

            {section.sub && (
              <div className="footer-sitemap-sub">
                {section.sub.map((sub) => {
                  return (
                    <a key={sub.id} href={`#${sub.id}`}>
                      <button>{sub.name}</button>
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
