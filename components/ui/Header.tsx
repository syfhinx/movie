import React, { HTMLAttributes } from 'react';

const Header = ({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className} {...props}>
      <h1>header</h1>
    </div>
  );
};

export default Header;
