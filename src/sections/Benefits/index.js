import "./index.css";

import { thumbnails, benefits } from "assets/data";
import { useContext } from "react";
import { AppContext } from "common/IntlProvider";

const Benefits = () => {
  const { getTranslated } = useContext(AppContext);

  return (
    <div className="App-content-wrapper" id="benefits">
      <div className="container">
        <div className="section-title">
          <h5>Benefits</h5>
          <h2>Why Choose Us</h2>
        </div>

        <div className="benefits-container">
          <div className="benefits-thumb">
            <img src={thumbnails.benefits} />
          </div>
          <div className="benefits-contents">
            {benefits.map((benefit, index) => {
              return (
                <div key={benefit.id} className="benefits-content">
                  <h2>{index + 1}.</h2>
                  <h5>{getTranslated("benefits", benefit.id)} </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
