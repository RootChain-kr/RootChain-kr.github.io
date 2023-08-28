import { useContext } from 'react';
import { AppContext } from 'AppContext';
import { company } from 'texts/common';
import Icon from 'components/Icon';

const Contact = () => {
  const { language } = useContext(AppContext);

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
              {company.addr[language]}
            </td>
          </tr>
          <tr>
            <td>CEO. </td>
            <td> {company.ceo[language]}</td>
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
                        <Icon icon={item.icon} color="#000" width={24} />
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

export default Contact;
