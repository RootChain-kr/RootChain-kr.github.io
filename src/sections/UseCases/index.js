import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, usecases } from 'texts/usecases';
import SectionHeader from 'components/SectionHeader';

const Usecases = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="App-content-wrapper" id={constants.id}>
      <div className="container">
        <SectionHeader {...constants} />

        <div className="usecases-card-container">
          {usecases.map((usecase) => {
            return (
              <div key={usecase.id} className="usecases-card">
                <div className="usecases-card-contents">
                  <div className="usecase-logo">
                    <img src={process.env.PUBLIC_URL + usecase.logo} />
                  </div>
                  <div className="usecase-desc" lang={language}>
                    {usecase[language]}
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
