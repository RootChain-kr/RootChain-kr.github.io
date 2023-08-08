import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, proofs, histories, category } from 'texts/achivements';
import SectionHeader from 'components/SectionHeader';

const Achivements = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="container achivements" id={constants.id}>
      <SectionHeader {...constants} />

      <div className="inner-container">
        <div className="inner-container-contents proofs-contents">
          {proofs.map((proof) => {
            return (
              <div key={proof.id} className="proofs-content">
                <h5 lang={language}>{proof.summary[language]}</h5>
                <p lang={language}> {proof.desc[language]}</p>
              </div>
            );
          })}
        </div>

        <div className="thumb-container">
          <img src={constants.thumb} />
        </div>
      </div>

      <table>
        <tbody>
          {histories.map((history) => {
            return (
              <tr key={history.id} className="achivements-content">
                <td>
                  <h3>{history.id}</h3>
                </td>

                <td className="achivements-year-contents">
                  {history.achivements.map((achivement, index) => {
                    return (
                      <div key={index} className="achivements-year-content">
                        <p
                          className="achivements-year-content-category"
                          lang={language}>
                          {category[achivement.category][language]}
                        </p>
                        <p lang={language}>{achivement[language]}</p>
                      </div>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Achivements;
