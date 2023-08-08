import { lable } from 'texts/common';

const LearnBtn = ({ children }) => {
  return (
    <a target="_blank" href={children} className="learn-btn">
      <button className="btn">{lable.learn}</button>
    </a>
  );
};

export default LearnBtn;
