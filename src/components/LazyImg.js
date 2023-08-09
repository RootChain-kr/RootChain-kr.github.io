import LazyLoad from 'react-lazyload';

const LazyImg = ({ height, src }) => {
  return (
    <LazyLoad height={height}>
      <img src={src} />
    </LazyLoad>
  );
};

export default LazyImg;
