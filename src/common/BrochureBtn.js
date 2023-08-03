import { product } from "assets/data";

const BrochureBtn = () => {
  return (
    <a target="_blank" href={product.brochure}>
      <button className="btn btn-black">View Brochure</button>
    </a>
  );
};

export default BrochureBtn;
