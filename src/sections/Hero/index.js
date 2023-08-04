import './index.css';

import { constants } from 'texts/hero';
import { usecases } from 'texts/usecases';
import { product } from 'texts/common';
import BrochureBtn from 'components/BrochureBtn';

const Hero = () => {
  return (
    <div className="App-content-wrapper" id={constants.id}>
      <div className="container">
        <div className="hero-headline">
          <div className="hero-headline-banner">
            <div className="hero-headline-tag">
              # Enterprise Blockchain Platform Solution
              <br /># Based on Hyperledger
            </div>
            <h1>
              Build Trust <br />
              Build Blockchain <br />
              Build <span>{product.name}</span>
            </h1>
            <BrochureBtn />
          </div>

          <div className="hero-headline-thumb">
            <img src={constants.thumb} />
            <div />
          </div>
        </div>

        <div className="hero-usecase">
          {usecases.map((usecase) => {
            return (
              <div key={usecase.id} className="logo">
                <img src={usecase.logo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
