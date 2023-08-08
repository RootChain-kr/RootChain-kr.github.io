import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, features } from 'texts/features';

const Features = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="container features" id={constants.id}>
      <div className="card-container">
        {features.map((feature) => {
          return (
            <div key={feature.id} className="card md-4">
              <div className="card-contents">
                <div className="features-icon icon">
                  <img src={feature.icon} />
                </div>

                <h5 className="features-desc" lang={language}>
                  {feature[language]}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
