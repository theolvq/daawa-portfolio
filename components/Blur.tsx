import React, { FC } from 'react';

const Blur: FC = () => {
  return (
    <div
      className={
        'even:left-3/3 absolute top-1/2 flex w-1/3 rotate-45 items-center justify-center first:left-1/3  last:left-2/3'
      }
    >
      <div
        className={'absolute h-24 w-36  translate-x-1/3  bg-cyan blur-2xl'}
      ></div>
      <div
        className={
          'absolute h-24 w-36 -translate-x-1/3  -rotate-180  bg-green-300 blur-2xl'
        }
      ></div>
      <div
        className={
          'absolute h-24 w-36 translate-y-full  -rotate-90 bg-purple blur-2xl'
        }
      ></div>
      <div
        className={
          'absolute h-24 w-36 -translate-y-full rotate-90 bg-white blur-2xl '
        }
      ></div>
    </div>
  );
};

export default Blur;
