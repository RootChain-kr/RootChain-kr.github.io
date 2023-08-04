import './index.css';
import { scrollToTop } from 'common/utils';

const TopButton = () => {
  return (
    <div className="scroll__container">
      <button id="top" onClick={scrollToTop} type="button">
        Top
      </button>
    </div>
  );
};

export default TopButton;
