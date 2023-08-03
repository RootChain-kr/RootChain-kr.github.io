import { product } from 'assets/data';

const BrochureBtn = () => {
  return (
    <a target="_blank" href={process.env.PUBLIC_URL + 'RootChain-brochure.pdf'}>
      <button className="btn btn-black">View Brochure</button>
    </a>
  );
};

export default BrochureBtn;
