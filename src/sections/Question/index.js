import './index.css';

import { product } from 'texts/common';
import ContactBtn from 'components/ContactBtn';
import BrochureBtn from 'components/BrochureBtn';

const Question = () => {
  return (
    <div
      className="container"
      id="contact"
      data-aos="fade-right"
      data-aos-duration="3000">
      <div className="question-container">
        <div className="question-headline">
          Do you have any questions about {product.name}?
        </div>
        <div className="question-actions">
          <BrochureBtn />
          <ContactBtn />
        </div>
      </div>
    </div>
  );
};

export default Question;
