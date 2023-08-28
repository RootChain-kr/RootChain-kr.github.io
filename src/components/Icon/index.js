import React from 'react';

const Icon = ({
  className,
  style,
  width = 24,
  height,
  viewBox = '0 0 24 24',
  color = '#fff',
  icon = '',
  children,
}) => {
  const styles = {
    fill: color,
    stroke: 'none',
    transition: 'fill .2s ease-out, transform .2s ease-out',
    ...style,
  };

  return (
    <svg
      className={className}
      style={styles}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg">
      {children ? children : <path d={icon} />}
    </svg>
  );
};

export default Icon;
