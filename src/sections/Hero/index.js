import "./index.css";
import { thumbnails, usecases } from "assets/data";
import BrochureBtn from "common/BrochureBtn";

const Hero = () => {
  return (
    <div className="App-content-wrapper" id="main">
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
              Build <span>Rootchain.</span>
            </h1>
            <BrochureBtn />
          </div>
          <div className="hero-headline-thumb">
            <img src={thumbnails.hero} />
            <div />
          </div>
        </div>

        <div className="hero-usecase">
          {usecases.map((usecase) => {
            return (
              <div key={usecase.id} className="logo">
                <img src={usecase.blk} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
