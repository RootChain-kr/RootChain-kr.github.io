import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, usecases } from 'texts/usecases';
import SectionHeader from 'components/SectionHeader';
import LearnBtn from 'components/LearnBtn';

const Usecases = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="container usecases" id={constants.id}>
      <SectionHeader {...constants} />

      <div className="card-container">
        {usecases.map((usecase) => {
          return (
            <div key={usecase.id} className="card md-4">
              <div className="card-contents">
                <div className="usecases-logo">
                  <img src={process.env.PUBLIC_URL + usecase.logo} />
                  <LearnBtn>{usecase.url}</LearnBtn>
                </div>
                <div className="usecases-desc" lang={language}>
                  {usecase[language]}
                </div>

                <div className="usecases-action">
                  <LearnBtn>{usecase.url}</LearnBtn>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Usecases;
