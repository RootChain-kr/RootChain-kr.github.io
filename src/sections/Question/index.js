import './index.css';

import { product } from 'texts/common';
import ContactBtn from 'components/ContactBtn';
import BrochureBtn from 'components/BrochureBtn';

const Question = () => {
  return (
    <div className="App-content-wrapper" id="contact">
      <div className="container">
        <div className="question-container">
          <div className="question-headline">
            Do you have any questions <br />
            about {product.name}?
          </div>
          <div className="question-actions">
            <BrochureBtn />
            <ContactBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
