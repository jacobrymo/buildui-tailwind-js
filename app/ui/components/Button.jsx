'use client';
import React from 'react';

const Button = React.forwardRef(({ onClick, children, full }, ref) => {
  return (
    <button
      onClick={onClick}
      ref={ref}
      className={`${full ? 'w-full' : 'w-fit'} h-12 rounded-xl bg-sky-500 px-4 font-bold hover:bg-sky-500/90 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-white md:h-10 md:px-3`}
    >
      <span className="px-1">{children}</span>
    </button>
  );
});
Button.displayName = Button;

export default Button;
