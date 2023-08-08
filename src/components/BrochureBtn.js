import { lable } from 'texts/common';

const BrochureBtn = () => {
  return (
    <a
      target="_blank"
      href={process.env.PUBLIC_URL + '/asset/RootChain-brochure.pdf'}>
      <button className="btn btn-black">{lable.brochure}</button>
    </a>
  );
};

export default BrochureBtn;
