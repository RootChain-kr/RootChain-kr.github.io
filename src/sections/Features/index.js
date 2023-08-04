import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, features } from 'texts/features';

const Features = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="App-content-wrapper" id={constants.id}>
      <div className="container">
        <div className="features-card-container">
          {features.map((feature) => {
            return (
              <div key={feature.id} className="features-card">
                <div className="features-card-contents">
                  <div className="icon">
                    <img src={feature.icon} />
                  </div>

                  <h5>{feature[language]}</h5>
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
