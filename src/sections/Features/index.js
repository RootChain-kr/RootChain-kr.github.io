import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, features } from 'texts/features';
import Icon from 'components/Icon';

const Features = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="container features" id={constants.id}>
      <div className="card-container">
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className="card md-4"
              data-aos="zoom-in"
              data-aos-duration="3000">
              <div className="card-contents">
                <div className="features-icon">
                  <Icon icon={feature.icon} color="#000" width={50} />
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
