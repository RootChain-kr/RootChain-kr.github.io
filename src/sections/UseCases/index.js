import "./index.css";

import { useContext } from "react";
import { AppContext } from "common/IntlProvider";
import { usecases } from "assets/data";

const Usecases = () => {
  const { getTranslated } = useContext(AppContext);

  return (
    <div className="App-content-wrapper foreground" id="usecases">
      <div className="container">
        <div className="section-title">
          <h5>Use Cases</h5>
          <h2>Our Customers & Partners</h2>
        </div>

        <div className="usecases-card-container">
          {usecases.map((usecase) => {
            return (
              <div key={usecase.id} className="usecases-card">
                <div className="usecases-card-contents">
                  <div className="usecase-logo">
                    <img src={usecase.logo} />
                  </div>
                  <div className="usecase-desc">
                    {getTranslated("usecases", usecase.id)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Usecases;
