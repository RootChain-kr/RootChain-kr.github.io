import { useContext } from "react";
import { AppContext } from "common/IntlProvider";
import "./index.css";
import { product, company, navItems } from "assets/data";

const AppFooter = () => {
  const { getTranslated } = useContext(AppContext);

  const Company = () => {
    return (
      <div className="footer-company">
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className="footer-company-logo img">
                  <img src={company.logo} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="footer-company-row">
                {getTranslated("company", "addr")}
              </td>
            </tr>
            <tr>
              <td>CEO. </td>
              <td>{getTranslated("company", "ceo")}</td>
            </tr>
            <tr>
              <td>BR no. </td>
              <td>{company.brno}</td>
            </tr>
            <tr>
              <td>Email. </td>
              <td>{company.email}</td>
            </tr>
            <tr>
              <td>Tel. </td>
              <td>{company.tel}</td>
            </tr>
            <tr>
              <td>Fax. </td>
              <td>{company.fax}</td>
            </tr>

            <tr>
              <td colSpan={2}>
                <div className="footer-company-social">
                  {company.social.map((item) => {
                    return (
                      <div key={item.id} className="icon-btn">
                        <a href={item.url}>
                          <img src={item.icon} />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const Sitemap = () => {
    return (
      <div className="footer-sitemap">
        {navItems.map((item) => {
          return (
            <div key={item.id} className="footer-sitemap-nav">
              <a className="nav-item" href={`#${item.id}`}>
                {item.name}
              </a>

              {item.sub && (
                <div className="footer-sitemap-nav-sub">
                  {item.sub.map((sub) => {
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

  return (
    <div className="App-footer" id="contactus">
      <div className="container">
        <div className="footer-wrapper">
          <Company />
          <Sitemap />
        </div>
      </div>

      <div className="container">
        <p className="footer-copyright">{product.copyright}</p>
      </div>
    </div>
  );
};

export default AppFooter;
