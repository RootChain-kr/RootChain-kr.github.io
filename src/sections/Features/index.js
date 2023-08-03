import "./index.css";
import { features } from "assets/data";
import { useContext } from "react";
import { AppContext } from "common/IntlProvider";

const Features = () => {
  const { getTranslated } = useContext(AppContext);

  return (
    <div className="App-content-wrapper" id="features">
      <div className="container">
        <div className="features-card-container">
          {features.map((feature) => {
            return (
              <div key={feature.id} className="features-card">
                <div className="features-card-contents">
                  <div className="icon">
                    <img src={feature.icon} />
                  </div>

                  <h5>{getTranslated("features", feature.id)}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
