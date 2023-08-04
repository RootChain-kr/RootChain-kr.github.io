import { useContext } from 'react';
import { AppContext } from 'AppContext';

import './index.css';
import { constants, histories } from 'texts/achivements';
import SectionHeader from 'components/SectionHeader';

const Achivements = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="App-content-wrapper" id={constants.id}>
      <div className="container">
        <SectionHeader {...constants} />

        <div className="history-container">
          <div className="history-contents">
            {histories.map((history) => {
              return (
                <div key={history.id} className="history-content">
                  <h3>{history.id}</h3>

                  <div className="history-year-contents">
                    {history.achivements.map((achivement, index) => {
                      return <p key={index}>{achivement[language]}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="history-thumb">
            <img src={constants.thumb} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
