import "./index.css";

import ContactBtn from "common/ContactBtn";
import BrochureBtn from "common/BrochureBtn";

const Question = () => {
  return (
    <div className="App-content-wrapper" id="contact">
      <div className="container">
        <div className="question-container">
          <div className="question-headline">
            Do you have any questions <br />
            about Rootchain?
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
