import './index.css';
import { useContext } from 'react';
import { AppContext } from 'AppContext';

import { constants, tags } from 'texts/hero';
import { usecases } from 'texts/usecases';
import { product } from 'texts/common';
import BrochureBtn from 'components/BrochureBtn';

const Hero = () => {
  const { language } = useContext(AppContext);
  return (
    <div className="container" id={constants.id}>
      <div className="hero-headline">
        <div className="hero-headline-banner">
          <div className="hero-headline-tag">
            {tags.map((tag, index) => {
              return (
                <div key={index} lang={language}>
                  # {tag[language]}
                </div>
              );
            })}
          </div>
          <h1>
            Build Trust <br />
            Build BlockChain <br />
            Build <span>{product.name}</span>
          </h1>
          <BrochureBtn />
        </div>

        <div className="thumb-container">
          <img src={constants.thumb} />
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
  );
};

export default Hero;
