import "./index.css";

import { useContext } from "react";
import { AppContext } from "common/IntlProvider";
import { history, thumbnails } from "assets/data";

const Achivements = () => {
  const { getTranslated } = useContext(AppContext);

  const HistoryCotents = (year) => {
    const contents = getTranslated("history", year);
    return (
      <div className="history-year-contents">
        {contents.map((conetent, index) => {
          return <p key={index}>{conetent}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="App-content-wrapper" id="achivements">
      <div className="container">
        <div className="section-title">
          <h5>Achivements</h5>
          <h2>We Are Proven</h2>
        </div>

        <div className="history-container">
          <div className="history-contents">
            {history.map((year) => {
              return (
                <div key={year} className="history-content">
                  <h3>{year}</h3>
                  {HistoryCotents(year)}
                </div>
              );
            })}
          </div>

          <div className="history-thumb">
            <img src={thumbnails.history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
