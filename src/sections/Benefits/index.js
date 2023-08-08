import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, benefits } from 'texts/benefits';
import SectionHeader from 'components/SectionHeader';

const Benefits = () => {
  const { language } = useContext(AppContext);

  return (
    <div
      className="container benefits"
      id={constants.id}
      data-aos="fade-right"
      data-aos-duration="3000">
      <SectionHeader {...constants} />

      <div className="inner-container">
        <div className="thumb-container">
          <img src={constants.thumb} />
        </div>

        <div className="inner-container-contents">
          {benefits.map((benefit, index) => {
            return (
              <div key={benefit.id} className="benefits-content">
                <h2>{index + 1}.</h2>
                <h5 lang={language}>{benefit[language]} </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
