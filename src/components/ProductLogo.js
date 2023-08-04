import { constants } from 'texts/hero';
import { product } from 'texts/common';

const ProductLogo = () => {
  return (
    <a href={`#${constants.id}`}>
      <div className="logo">
        <img src={product.symbol} />
      </div>
    </a>
  );
};

export default ProductLogo;
