import React from "react";

const HeroBackground = () => {
  return (
    <div className="h-full w-screen absolute top-0 left-0 -z-10">
      <div className="absolute top-0 left-0 -z-10 hidden lg:block">
        <svg
          className="w-full "
          viewBox="0 0 1924 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M559.5 173L0 556V0H1924L1326.5 379L559.5 173Z"
            fill="#181825"
          />
        </svg>
      </div>
      <div className="absolute -bottom-1 right-0 -z-10 ">
        <svg
          width="1053"
          height="318"
          viewBox="0 0 1053 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1053 0L0 317.5H1053V0Z" fill="#181825" />
        </svg>
      </div>
    </div>
  );
};

export default HeroBackground;
