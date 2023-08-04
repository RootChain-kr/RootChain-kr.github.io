import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, benefits } from 'texts/benefits';
import SectionHeader from 'components/SectionHeader';

const Benefits = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="App-content-wrapper" id={constants.id}>
      <div className="container">
        <SectionHeader {...constants} />

        <div className="benefits-container">
          <div className="benefits-thumb">
            <img src={constants.thumb} />
          </div>

          <div className="benefits-contents">
            {benefits.map((benefit, index) => {
              return (
                <div key={benefit.id} className="benefits-content">
                  <h2>{index + 1}.</h2>
                  <h5>{benefit[language]} </h5>
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
